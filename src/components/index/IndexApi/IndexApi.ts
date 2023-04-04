import {  res,apiUrl} from "@/axios/axios"
import {AxiosPromise, AxiosResponse} from "axios";
import {Api} from "@/utils/Api";


export class IndexApi extends Api{

    constructor() {
        super();
    };

    public loadModule(): AxiosPromise<res> {
        return super.httpGet(apiUrl.titleApiUrl + "class/get", {});
    }

    public loadAdvLinks(): AxiosPromise<res> {
        return super.httpGet(apiUrl.titleApiUrl + "class/getLinks",{});
    }


    public loadActivices(per_page: number = 10,
                         curr_page: number = 1) {
        return super.httpPostStruct(apiUrl.activeApiUrl + "active/getAll",[],per_page,curr_page);
    }

}