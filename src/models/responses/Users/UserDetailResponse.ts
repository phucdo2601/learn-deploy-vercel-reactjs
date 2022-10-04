import { RoleModel } from "../../basic/RoleModel";

export interface UserDetailResponse {
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