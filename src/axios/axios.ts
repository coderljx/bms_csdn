import axios, {AxiosInstance, AxiosPromise} from "axios";


const axiosInstall : AxiosInstance  = axios.create({
    timeout : 5000,
    // baseURL : "http://localhost"
});



export const httpGet = (url : string,params : object) : AxiosPromise => {
    let data = objParse(params);
    url = userInfo(url);
    return axiosInstall.get(url + "&" + data);
}

export const httpPost = (url : string,params : object) : AxiosPromise => {
    url = userInfo(url);
   return  axiosInstall.post(url,params);
}

const objParse = (params : object) : string => {
    let res = "";
    for (let i in params) {
        // @ts-ignore
        res += params[i] + "&";
    }
    res = res.substring(0,res.length - 1);
    return res;
}

const userInfo = (url : string) : string => {
    let user : string = window.localStorage.getItem("user") as string;

    if (user) {
        let data = JSON.parse(user);
        url +=  "?userid=" + data.id;
        url += "&appid=1";
    }
    return url;
}

