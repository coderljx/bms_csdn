import {IndexApi} from "@/components/index/IndexApi/IndexApi"
import {ref} from "vue";
import {ApiReturn} from "@/utils/uutils";
import Mock from "mockjs";


export class Index {
    private indexApi: IndexApi;

    constructor() {
        this.indexApi = new IndexApi();
        this.loadModule();
        this.loadAdvImgLinks();
    };

    public moduleData = ref([]);
    public advLinks = ref([]);
    public actives = ref([]);
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

}