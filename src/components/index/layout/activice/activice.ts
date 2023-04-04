import {IndexApi} from "@/components/index/IndexApi/IndexApi"
import {ref} from "vue";
import {ApiReturn} from "@/utils/uutils";
import Mock from "mockjs";


export class Activice {
    private indexApi: IndexApi;

    constructor() {
        this.indexApi = new IndexApi();
        this.loadActivices();
    };
    public actives : any = ref([]);


    /**
     * 加载活动信息
     */
    public loadActivices(per_page: number = 15,
                         curr_page: number = 1) {
        this.indexApi.loadActivices(per_page,curr_page).then(data => {
            if (ApiReturn(data)) {
                let data1 = data.data.data;
                let newArray : any = [];
                if (data1 instanceof Array) {
                    data1.forEach((item : any) => {
                        newArray.push(item.activitiesName);
                    });
                }
                this.actives.value = newArray;
            }
        })
    }


}