import { ElMessage } from 'element-plus'

export type Type = "success" | "warning" | "error";

export const ApiReturn = (data : any) : boolean => {
    return data.data.status == 200
}

export const MessageBox = (message : string, type : Type) => {
    ElMessage({
        message: message,
        type: type,
        zIndex : 1999998
    })
}


/**
 * 验证字段是否 未定义的
 * @param data
 */
export const fieldIsUndefined = (data : any) : boolean => {
    return data == undefined || data == "";
}


/**
 * 时间转换字符串
 * @param timestamp
 */
export function timestampToTime(timestamp : string) : string {
    // 时间戳为10位需*1000，时间戳为13位不需乘1000
    var date = new Date(window.parseInt(timestamp));
    var Y = date.getFullYear() + "-";
    var M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}




export abstract class Message {
    public static systemMessage : string = "系统错误,请联系管理员或重试!";
    public static paramsMessage : string = "页面参数有误,请重试!";
    public static hotTextMessage : string = "加载热门文章失败,请稍后重试!";
    public static userLoginMessage : string = "请先登录后,再进行该操作!";
    public static reFollowMessage : string = "您已经关注该用户,请勿重复关注!";
    public static PhoneOrPsdNotNull : string = "用户名或密码不能为空";

    public static createUserMessage : string = "注册用户失败,请联系管理员!";
    public static uploadFileMessage : string = "用户头像暂时只支持 JPG,PNG,JPEG格式!";

    public static uploadFileSizeMessage : string = "用户头像最大只能选择2MB的图片!";

}
