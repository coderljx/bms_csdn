import {httpGet,httpPost} from "@/axios/axios"
import {ref} from "vue";
import {ApiReturn} from "@/utils/uutils";


export class Index {
    constructor() {
        this.loadModule();
    };


    public apiUrl = "titleService/api/";
    public moduleData = ref([]);

    public userLogin() {
    }

    /**
     * 加载所有的模块
     */
    public loadModule() {
        httpGet(this.apiUrl + "class/get",{}).then(data => {
            if (ApiReturn(data)) {
                this.moduleData.value = data.data.data;
            }
        });
    }

    
}