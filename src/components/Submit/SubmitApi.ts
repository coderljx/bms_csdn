import {Api} from "@/utils/Api";
import {AxiosPromise} from "axios";
import {res} from "@/axios/axios";


export class SubmitApi extends Api{

    constructor() {
        super();
    }

    public httpGet(url: string, params: object): AxiosPromise<res> {
        return super.httpGet(url,params);
    };
}