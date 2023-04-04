import {httpGet, httpPost, httpPostStruct, res} from "@/axios/axios"
import {AxiosPromise, AxiosResponse} from "axios";


// 抽象api类 所有的接口统一管理
export abstract class Api {

    public httpGet(url: string, params: object): AxiosPromise<res> {
        return httpGet(url, params);
    };


    public httpPostStruct(url: string,
                          rules: Array<object> = [],
                          per_page?: number,
                          curr_page?: number,
                          order?: object,
                          search?: string): AxiosPromise<res> {
        return httpPostStruct(url, rules, per_page, curr_page, order, search);
    }


    public httpPost(url: string, params: object): AxiosPromise<res> {
        return httpPost(url,params);
    };


}