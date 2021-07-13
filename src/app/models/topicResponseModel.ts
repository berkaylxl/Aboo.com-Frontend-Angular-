import { ResponseModel } from "./responseModel";
import { Topic } from "./topic";

export interface TopicResponseModel extends ResponseModel{
    data:Topic[]
   
}