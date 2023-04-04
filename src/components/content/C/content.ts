
import {ApiReturn} from "@/utils/uutils";
import {ContentApi} from "@/components/content/C/ContentApi";
import {ref} from "vue";
import {apiUrl} from "@/axios/axios";



export class Content {
    private contentApi: ContentApi;

    constructor() {
        this.contentApi = new ContentApi();
        this.loadText();
    };


    public detailText = ref("");

    /**
     * 加载文章内容
     */
    public loadText() {
        this.contentApi.loadText(apiUrl.titleApiUrl + "text/get", {}).then(data => {
            if (ApiReturn(data)) {
                this.detailText.value = data.data.data[0].detail;
            }
        })
    }




}