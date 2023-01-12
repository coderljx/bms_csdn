import axios, {AxiosInstance, AxiosPromise} from "axios";


const axiosInstall : AxiosInstance  = axios.create({
    timeout : 5000,
    baseURL : "http://localhost"
});



export const httpGet = (url : string,params : object) : AxiosPromise => {
    let data = objParse(params);
    url = userInfo(url);
    return axiosInstall.get(url + "?" + data);
}

export const httpPost = (url : string,params : object) : AxiosPromise => {
    url = userInfo(url);
   return  axiosInstall.post(url,params);
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

    if (user) {
        let data = JSON.parse(user);
        url +=  "/1";  // appid
        url += "/" + data.id;  // userid
    }
    return url;
}

