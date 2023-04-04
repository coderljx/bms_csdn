import axios, {AxiosInstance, AxiosPromise} from "axios";


const axiosInstall : AxiosInstance  = axios.create({
    timeout : 5000,
    baseURL : "http://localhost"
});



export const httpGet = (url : string,params : object) : AxiosPromise => {
    let data = objParse(params);
    url = userInfo(url);
    return axiosInstall.get(url +  data);
}

export const httpPost = (url : string,params : any) : AxiosPromise => {
    url = userInfo(url);
   return  axiosInstall.post(url,params);
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
    let user : string = window.localStorage.getItem("user") as string;
    url +=  "/1";  // appid
    if (user) {
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


export abstract class apiUrl {
    public static titleApiUrl = "titleService/api/";
    public static activeApiUrl = "activitiesService/api/";
}