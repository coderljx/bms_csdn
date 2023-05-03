import axios, {AxiosInstance, AxiosPromise, AxiosResponse} from "axios";
import {MessageBox} from "@/utils/uutils"

const axiosInstall : AxiosInstance  = axios.create({
    timeout : 5000,
    baseURL : "http://localhost"
});


/**
 * 所有请求的响应拦截器，处理逻辑接口返回值的问题
 */
axiosInstall.interceptors.response.use( (res) : AxiosResponse => {

    let data = res.data;
    if (data.status != 200) {
        MessageBox(data.msg,"error");
    }
    return res;
});


export const httpGet = (url : string,params : object) : AxiosPromise => {
    url = httpGetOrDelUrl(url,params);
    return axiosInstall.get(url);
}

export const httpPost = (url : string,params : any) : AxiosPromise => {
    url = userInfo(url);
   return  axiosInstall.post(url,params);
}

export const httpDel = (url : string,params : object) => {
     url = httpGetOrDelUrl(url,params);
    return axiosInstall.delete(url);
}

const httpGetOrDelUrl = (url : string,params : any) : string => {
    let data = objParse(params);
    let newUrl = userInfo(url);
    if (data == null || data == "" || data == undefined) {
        url = newUrl;
    }else {
        url = newUrl.endsWith("?") ?
            newUrl + data :
            newUrl + "&" + data;
    }
    return url;
}


/**
 *
 * @param url 地址
 * @param rules 携带的参数
 * @param per_page 数据条数
 * @param curr_page 当前页
 * @param order 排序字段
 * @param search 查询内容
 */
export const httpPostStruct = (url: string,
                               rules: Array<object>,
                               per_page: number = 10,
                               curr_page: number = 1,
                               order?: object,
                               search?: string): AxiosPromise => {
    url = userInfo(url);
    let obj =
        {
            "payload": {
                "rules": rules,
                "search": "",
                "filters": {},
                "per_page": per_page,
                "curr_page": curr_page
            },
            "order": order
        }
    return axiosInstall.post(url, obj);
}


const objParse = (params : object) : string => {
    let res = "";
    var keys : string[] = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
        // @ts-ignore
        res += keys[i] + "=" + params[keys[i]] + "&";
    }
    res = res.substring(0,res.length - 1);
    return res;
}

const userInfo = (url : string) : string => {
    let user : string | null = window.localStorage.getItem("user") as string;
    url +=  "/1";  // appid
    if (user != "undefined") {
        let data = JSON.parse(user);
        url += "?userid=" + data.id;  // userid
    }else {
        url += "?";
    }
    return url;
}


export type res = {
    data : any,
    status : number,
    msg : string
}


/**
 * 检查当前用户是否登录过
 * 在一些需要登录的操作中使用
 */
export const userLogin = () : boolean => {
    let user : string = window.localStorage.getItem("user") as string;
    if (!user) return false;

    let data = JSON.parse(user);
    return !!(data.id && data.name);
}


export const currentUser = () : User => {
    let user : User = {

    };
    let loginUser : string = window.localStorage.getItem("user") as string;
    if (!loginUser) {
        return user;
    }
    let loginUserData = JSON.parse(loginUser);
    user.id = loginUserData.id;
    user.name = loginUserData.name;
    user.phone = loginUserData.phone;
    return user;
}

export type User = {
    id? : string,
    name? : string,
    phone? : string
}


export abstract class apiUrl {
    public static titleApiUrl = "titleService/api/";
    public static activeApiUrl = "activitiesService/api/";

    public static userApiUtr = "userService/api/";

    public static commentApiUrl = "commentService/api/"; // 评论服务
}