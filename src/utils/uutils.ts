import { ElMessage } from 'element-plus'

export type Type = "success" | "warning" | "error";

export const ApiReturn = (data : any) : boolean => {
    return data.data.status == 200
}

export const MessageBox = (message : string, type : Type) => {
    ElMessage({
        message: message,
        type: type,
    })
}