import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";
import { StaffTrainingRequest } from '../../models/requests/StaffTraining/StaffTrainingRequest';
import { UpdateLecFERankRequest } from "../../models/requests/FESalary/UpdateLecFERankRequest";

const updateLecFESalRank = async (token: string, model: UpdateLecFERankRequest) => {
    return await authenCallApi(token).put(`/FESalary/Lecturer`, model);
}

const getAllStaffTrainingRoom = async (token: string) => {
    return await authenCallApi(token).get(`/StaffTraining/StaffTrainingRoomInfos`);
}

const getStaffTrainingByGenUserId = async (token: string, id: string) => {
    return await authenCallApi(token).get(`/StaffTraining/${id}`);
}

const updateStaffTrainingById = async (token: string, id: string, model: StaffTrainingRequest) => {
    return await authenCallApi(token).put(`/StaffTraining/${id}`, model);
}

const updateStaffTrainingStatusById = async (token: string, id: string, status: boolean) => {
    return await authenCallApi(token).put(`/StaffTraining/StaffTrainingRoom/${id}/${status}`);
}

const addNewStaffTraining = async (token: string, model: StaffTrainingRequest) => {
    return await authenCallApi(token).post(`/StaffTraining`, model);
}

const StaffTrainingRoomApi = {
    updateLecFESalRank,
    getAllStaffTrainingRoom,
    getStaffTrainingByGenUserId,
    updateStaffTrainingById,
    updateStaffTrainingStatusById,
    addNewStaffTraining
}

export default StaffTrainingRoomApi;