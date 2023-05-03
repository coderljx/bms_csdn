
import {ApiReturn, fieldIsUndefined, Message, MessageBox,timestampToTime} from "@/utils/uutils";
import {ContentApi, UserInfo,data, ListMapImp} from "@/components/content/C/ContentApi";
import {getCurrentInstance, Ref, ref} from "vue";
import {apiUrl, currentUser, User, userLogin} from "@/axios/axios";
import Mock from 'mockjs';
/**
 * 通过 useRouter 拿到vue路由传递过来的数据
 */
import {Router,useRouter} from "vue-router";



export class Content {
    private contentApi: ContentApi;
    private readonly router :  Router | undefined;
    private useRouter :  Router;


    constructor() {
        this.contentApi = new ContentApi();
        this.router = getCurrentInstance()?.proxy?.$router;
        this.useRouter = useRouter();


        this.loadText();
        this.loadUserInfo();
        this.loadHotText();
        this.getComment();
    };

    /**
     * 查询的文章信息
     */
    public detailText = ref("");

    /**
     * 根据当前的文章id，查询的用户信息
     */
    public userInfo = ref(UserInfo);
    public hotText = ref([]); // 热门文章

    public followBtnText = ref("关注"); // 关注按钮显示的字段，如果用户登录了，会检查是否跟文章作者有关注关系

    public commentTotal = ref(0); // 评论总数

    public commentData = ref<data>(); // 评论数据体

    /**
     * 加载文章内容
     */
    public loadText() {
        let id = this.useRouter.currentRoute.value.query.id;
        if (fieldIsUndefined(id)) {
            MessageBox(Message.paramsMessage,"error");
            return;
        }
        this.contentApi.loadText(apiUrl.titleApiUrl + "text/get", {id}).then(data => {
            if (ApiReturn(data)) {
                this.detailText.value = data.data.data.detail;
            }
        })
    }

    /**
     * 根据路由传入的文章id，查询这个文章主人的信息
     */
    public loadUserInfo() {
        let id = this.useRouter.currentRoute.value.query.id;
        if (fieldIsUndefined(id)) {
            MessageBox(Message.paramsMessage,"error");
            return;
        }
        this.contentApi.httpGet(apiUrl.titleApiUrl + "text/getTextByUid", {textId : id}).then(data => {
            if (ApiReturn(data)) {
                this.userInfo.value = data.data.data;
                if (this.userInfo.value.isFollow && this.userInfo.value.isFollow > 0) {
                    this.followBtnText.value = "已关注";
                }
                let day = this.userInfo.value.createTime;
                // 如果成功查询当前用户的创建账号时间
                if (day) {
                   if (day >= 0 && day < 365) {
                       this.userInfo.value.createTimeStr = day + "天";
                   }else {
                       this.userInfo.value.createTimeStr = day/ 365 + "年";
                   }
                }

            }
        })
    }


    /**
     * 获取热门文章
     */
    public loadHotText() {
        this.contentApi.httpGet(apiUrl.titleApiUrl + "text/getHotText", {}).then(data => {
            if (!ApiReturn(data)) {
                MessageBox(Message.hotTextMessage,"error");
                return;
            }
            this.hotText.value = data.data.data;
        })
    }


    public clickHotText(data : any) {
        let id = data.id;
        if (this.router == null) {
            MessageBox(Message.systemMessage,"error");
            return;
        }
        // 重新打开一个窗口来显示内容
        const resolve = this.router.resolve({path : "/content",query : {id}});
        window.open(resolve.href, '_blank');
    }

    /**
     * 当前用户关注文章作者
     * 如果当前用户已经关注过了，那么再点调用则是取关这个作者
     */
    public follow = () => {
        let login = userLogin();
        let url = "user/follow";
        let btnMessage = "已关注";
        if (this.followBtnText.value == "已关注") {
            url = "user/unfollow";
            btnMessage = "关注"
        }
        if (!login) {
            MessageBox(Message.userLoginMessage,"error");
            return;
        }
        let obj = {
            // @ts-ignore
            "value" : this.userInfo.value.userId + ""
        }
        this.contentApi.httpPostStruct(apiUrl.userApiUtr + url,[obj]).then(data => {
            if (ApiReturn(data)) {
                this.followBtnText.value = btnMessage;
            }
        });
    }


    /**
     * 根据当前的文章id，获取该文章下的评论
     */
    public getComment = () => {
        let id = this.useRouter.currentRoute.value.query.id;
        this.contentApi.httpGet(apiUrl.commentApiUrl + "comment/getCommentById",{
            textId : id,
            perPage : 10,
            currPage : 1
        }).then(data => {
            if (ApiReturn(data)) {
                let res = data.data.data;
                this.commentTotal.value = res.total;

                let ds : data = res;
                let foors = ds.foors;
                // 如果返回的顶级评论id大于0 代表该文章有评论
                if (foors != undefined && foors.length > 0) {
                    let map : ListMapImp = ds.listMap as ListMapImp;
                    foors.forEach(item => {
                        let comment = map[item];
                        if (comment.length > 1) {
                            // 第一次遍历是讲顶层评论显示再最前面
                            comment.forEach((com,index,arr) => {
                                com.createTime = timestampToTime(com.createTime);
                                // 如果该顶层评论下有多条数据，并且顶层评论不是第一条数据，讲顶层评论顺序切换
                                // 正常情况是 ： 顶层评论是最开始的评论，后台按照时间降序排列后，会变成最后面的一条评论，
                                // 我们需要讲其丢到第一条去显示，后面的评论顺序不动，显示最新的评论
                               if (com.parentComentId == null && index != 0) {
                                   let da0 = arr[0];
                                   arr[0] = com;
                                   arr[index] = da0;
                               }
                            });
                            // 第二次遍历是根据回复的id，找到回复人信息
                            comment.forEach((com,index,arr) => {
                                if (com.parentComentId != null) {
                                    let parentId = com.parentComentId;
                                    for (let i = 0;i < arr.length; i++) {
                                        if (parentId === arr[i].id) {
                                            com.parentUserName = arr[i].userName;
                                        }
                                    }
                                }
                            });
                        }

                    });
                }
                this.commentData.value = ds;
            }
        });
    }

}