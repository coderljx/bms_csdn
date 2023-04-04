import {Api} from "@/utils/Api";
import {apiUrl} from "@/axios/axios";


export class ContentApi extends Api{

    constructor() {
        super();
    }

    public loadText(url : string,params : object){
        return super.httpGet(url,params);
    }



}