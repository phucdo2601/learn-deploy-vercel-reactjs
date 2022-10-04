import { LecturerModel } from '../../basic/LecturerModel';
import { LecturerPositionModel } from '../../basic/LecturerPositionModel';
import { RoleModel } from '../../basic/RoleModel';
import { LecDepResponseModel } from './LecDepResponseModel';

export interface LecturerModelResponse {
  generalUserInfoId: string | any;
  fullName?: string | any;
  userName?: string | any;
  password?: string | any;
  gmail?: string | any;
  phoneNumber?: string | any;
  nationalId?: string | any;
  imageUrl?: string | any;
  dateOfBirth?: string | any;
  gender?: string | any;
  numDependant?: number;
  isDisable?: boolean;
  address?: string | any;
  roleId?: string | any;
  role?: RoleModel;
  lecture?: LecturerModel;
  deparment?: LecDepResponseModel;
  lecturerPosition?: LecturerPositionModel;
}
