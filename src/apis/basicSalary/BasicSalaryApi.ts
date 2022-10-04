import { BasicSalRequest } from "../../models/requests/BasicSalaryRequest/BasicSalRequest";
import { authenCallApi } from "../BaseUrl"

const getAllBasicSals = async (token: string) => {
    return await authenCallApi(token).get(`/BasicSalary/BasicSalarys`);
}

const getBasicSalaryDe = async (token: string, id: string) => {
    return await authenCallApi(token).get(`/BasicSalary/${id}`);
}

const addNewBasicSalary = async (token: string, model: BasicSalRequest) => {
    return await authenCallApi(token).post(`/BasicSalary`, model);
}

const updateBasicSalById = async (token: string, id: string, model: BasicSalRequest) => {
    return await authenCallApi(token).put(`/BasicSalary/${id}`, model);
}

const updateBasicSalStatusById = async (token: string, id: string, status: boolean) => {
    return await authenCallApi(token).put(`/BasicSalary/${id}/${status}`)
}

const BasicSalaryApi = {
    getAllBasicSals,
    getBasicSalaryDe,
    addNewBasicSalary,
    updateBasicSalById,
    updateBasicSalStatusById,
}

export default BasicSalaryApi;