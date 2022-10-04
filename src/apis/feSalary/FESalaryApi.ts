import { FESalaryRequest } from "../../models/requests/FESalary/FESalaryRequest";
import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";

const getAllFESalaries = async (token: string) => {
    return await authenCallApi(token).get(`/FESalary/FESalaries`);
}

const getFESalaryById = async (token: string, id: string) => {
    return await authenCallApi(token).get(`/FESalary/${id}`);
}

const updateFESalaryById = async (token: string, id: string, model: FESalaryRequest) => {
    return await authenCallApi(token).put(`/FESalary/${id}`, model);
}

const updateFESalaryStatusById = async (token: string, id: string, status: boolean) => {
    return await authenCallApi(token).put(`/FESalary/${id}/${status}`);
}

const addNewFESalary = async (token: string, model: FESalaryRequest) => {
    return await authenCallApi(token).post(`/FESalary`, model);
}

const FESalaryApi = {
    getAllFESalaries,
    getFESalaryById,
    updateFESalaryById,
    updateFESalaryStatusById,
    addNewFESalary,
}

export default FESalaryApi;