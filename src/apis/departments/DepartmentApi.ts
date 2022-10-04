import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";
import { DepartmentRequest } from '../../models/requests/Departments/DepartmentRequest';

const getAllDepartments = async (token: string) => {
    return await authenCallApi(token).get("/Department/Departments");
}

const getPosInDep = async (token: string) => {
    return await authenCallApi(token).get("/Department/Positions");
}

const getLecInDepByDepId = async (token: string, departmentId: string) => {
    return await authenCallApi(token).get(`/Department/Lecturers?departmentId=${departmentId}`);
}

const addNewDep = async (token: string, model: DepartmentRequest) => {
    return await authenCallApi(token).post(`/Department`, model);
}

const updateDepByDepId = async (token: string, id: string, model: DepartmentRequest) => {
    return await authenCallApi(token).put(`/Department?id=${id}`, model);
}

const updateStatusDepByDepId = async (token: string, id: string, status: boolean) => {
    return await authenCallApi(token).put(`/Department/${id}${status}`)
}


const DepartmentApi = {
    getAllDepartments,
    getPosInDep,
    getLecInDepByDepId,
    addNewDep,
    updateDepByDepId,
    updateStatusDepByDepId
}

export default DepartmentApi;