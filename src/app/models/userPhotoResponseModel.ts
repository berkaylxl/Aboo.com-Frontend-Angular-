import { ResponseModel } from "./responseModel";
import { UserPhoto } from "./userPhoto";

export interface UserPhotoResponseModel extends ResponseModel{
      data:UserPhoto[]
}