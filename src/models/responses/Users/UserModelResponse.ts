import { RoleModel } from "../../basic/RoleModel";
import { RoleResponse } from "../Roles/RoleResponse";


export interface UserModelResponse {
    generalUserInfoId : string|any;
    fullName?: string|any;
    userName?: string|any;
    password?: string|any;
    gmail? : string|any;
    phoneNumber?: string|any;
    nationalId?: string|any;
    imageUrl?: string|any;
    dateOfBirth?: string|any;
    gender?: string|any;
    numDependant?: number;
    isDisable?: boolean;
    address? : string|any;
    roleId? : string|any;
    role? : RoleModel;
}