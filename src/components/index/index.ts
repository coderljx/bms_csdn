import {httpGet,httpPost} from "@/axios/axios"

export class Index {
    constructor() {
        this.loadModule();
    };

    public userLogin() {

    }

    /**
     * 加载所有的模块
     */
    public loadModule() {
        httpGet("titleService/api/class/get",{koko : 123,koks : 123}).then(data => {
        });
    }

    
}