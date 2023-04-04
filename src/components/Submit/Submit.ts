import {Api} from "@/utils/Api";
import {ref} from "vue";
import {apiUrl} from "@/axios/axios";
import {ApiReturn} from "@/utils/uutils";
import {SubmitApi} from "@/components/Submit/SubmitApi";


export class Submit {

    private submitApi : any;

    constructor() {
         this.submitApi = new SubmitApi();
    }

    public coverPhoto = ref(); //
    public imageUrl = ref(false); // 图片地址
    public coverTitle = ref(""); // 标题
    public textType = ref(""); // 文章类型
    public releaseForm = ref(""); // 发布形式/可见范围



    /**
     * 新增标签
     */
    public addTitle() {
        this.submitApi.httpGet(apiUrl.titleApiUrl + "class/get",{}).then( ( data : any) => {
            if (ApiReturn(data)) {

            }
        })
    }





}