import { SchoolModel } from '../../basic/SchoolModel';
export interface DepartmentModelResponse {
    departmentId : string|any;
    departmentName? : string;
    isDisable? : boolean;
    schoolId? : string;
    school?: SchoolModel;
}