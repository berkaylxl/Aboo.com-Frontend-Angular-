import { ResponseModel } from "./responseModel";

export interface ObjResponseModel<T> extends ResponseModel
{
    data:T;
}