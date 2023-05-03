import {Api} from "@/utils/Api";
import {ref} from "vue";
import {apiUrl} from "@/axios/axios";
import {ApiReturn, MessageBox} from "@/utils/uutils";
import {SubmitApi} from "@/components/Submit/SubmitApi";


export class SubmitLogic {

    private submitApi : any;

    constructor() {
         this.submitApi = new SubmitApi();
    }

    public coverPhoto = ref(); //
    public imageUrl = ref(false); // 图片地址
    public coverTitle = ref(""); // 标题
    public textType = ref(""); // 文章类型
    public releaseForm = ref(""); // 发布形式/可见范围

    public moduleName = ref([]);
    public titleName = ref([]);
    // 选中的title，最终会进行传输
    public selectTitleName = ref<any>([]);

    /**
     * 新增标签
     */
    public addTitle() {
        this.submitApi.httpGet(apiUrl.titleApiUrl + "class/get",{}).then( ( data : any) => {
            if (ApiReturn(data)) {
                this.moduleName.value = data.data.data;
            }
        })
    }


    /**
     * 用户在选择标签后触发事件
     * @param  id 用户选择的标签id
     */
    public selectModule(id : number) {
        this.submitApi.httpGet(apiUrl.titleApiUrl + "title/getTitle",{ id }).then( ( data : any) => {
            if (ApiReturn(data)) {
                this.titleName.value = data.data.data;
            }
        })
    }

    /**
     * 用户选择一个标签，会进行记录，并最终传输
     * @param id
     */
    public selectTitle(data : any) {
        let datas = this.selectTitleName.value;
        if (datas.length >= 5) {
            MessageBox("最多选择5个标签", "error");
            return;
        }
        let i = -1;
        datas.forEach((item: any, index: number) => {
            if (item.id == data.id) {
                i = index;
            }
        });
        if (i >= 0) {
            datas.splice(i, 1);
        }
        datas.push(data);
    }


    /**
     * 用户点击删除标签，删除当前选中的标签
     * @param id
     */
    public delSelectTitle(id : number) {
        let datas = this.selectTitleName.value;
        let i = -1;
        datas.forEach((item: any, index: number) => {
            if (item.id == id) {
                i = index;
            }
        });
        if (i >= 0) {
            datas.splice(i, 1);
        }
    }



}