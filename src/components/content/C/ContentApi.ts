import {Api} from "@/utils/Api";
import {apiUrl, res} from "@/axios/axios";
import {AxiosPromise} from "axios";
import {Key} from "@element-plus/icons-vue";


export class ContentApi extends Api{

    constructor() {
        super();
    }

    public loadText(url : string,params : object){
        return super.httpGet(url,params);
    }

    public httpPost(url: string, params: object): AxiosPromise<res> {
        return super.httpPost(url, params);
    }


    public httpGet(url: string, params: object): AxiosPromise<res> {
        return super.httpGet(url, params);
    }

    public httpPostStruct(url: string, rules: Array<object> = [], per_page?: number, curr_page?: number, order?: object, search?: string): AxiosPromise<res> {
        return super.httpPostStruct(url, rules, per_page, curr_page, order, search);
    }

}





export abstract class UserInfo  {
    public static userId? : number; // 用户id

    public static userName? : string;

    public static createTime? : number // 用户创建时间与当前时间的差值（单位： 天数）

    public static createTimeStr? : string; // 根据接口返回的天数，转换成年月日

    public static viewCount? : number; // 当前这个用户id下的所有文章的 view（被查看次数）字段总和

    public static originalityCount? : number; // 当前用户的所有文章总量（没有被删除的）

    public static isFollow? : number; // 如果当前用户登录了，那么会查询当前用户是否有关注过跟文章的作者吗？

}


export abstract class data  {
    public foors? : Array<string>;
    public listMap? : ListMapImp
}

export type ListMapImp = {
    [Key in any] : Array<any>
}