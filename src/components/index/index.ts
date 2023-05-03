import {IndexApi} from "@/components/index/IndexApi/IndexApi"
import {ComponentInternalInstance, getCurrentInstance, ref} from "vue";
import {ApiReturn, Message, MessageBox} from "@/utils/uutils";
import {Router} from "vue-router";


export class Index {
    private indexApi: IndexApi;

    private router :  Router | undefined;

    constructor() {
        this.indexApi = new IndexApi();
        this.router = getCurrentInstance()?.proxy?.$router;
        // 页面刷新/初始化时需要加载的数据
        this.loadModule();
        this.loadAdvImgLinks();
        this.loadHotText();
    };

    public moduleData = ref([]);
    public advLinks = ref([]);
    public actives = ref([]);

    public hotText = ref([]); // 热门文章

    /**
     * 加载所有的模块
     */
    public loadModule() {
        this.indexApi.loadModule().then(data => {
            if (ApiReturn(data)) {
                this.moduleData.value = data.data.data;
            }
        });
    }

    /**
     * 加载广告图片地址
     */
    public loadAdvImgLinks() {
        this.indexApi.loadAdvLinks().then(data => {
            if (ApiReturn(data)) {
                this.advLinks.value = data.data.data
            }
        })
    }


    /**
     * 页面加载默认的热门文章
     */
    public loadHotText() {
        this.indexApi.loadHotText().then(data => {
            if (!ApiReturn(data)) {
                MessageBox("加载热门文章失败,请稍后重试","error");
                return;
            }
            this.hotText.value = data.data.data;
        })
    }


    /**
     * 用户点击了热门文章链接
     * @param data
     */
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



}