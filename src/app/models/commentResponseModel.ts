import { Comment } from "./comment";
import { ResponseModel } from "./responseModel";

export interface CommentResponseModel extends ResponseModel{

    data:Comment[]
}