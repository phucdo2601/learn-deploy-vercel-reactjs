import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";

const getAllUsers = async (token : string) => {
    return authenCallApi(token).get("/User/UserInfos");
}

const getUserByUserId = async (userId : string, token : string) => {
    return authenCallApi(token).get(`/User/${userId}`);
}

const updateUserStatus = async (userId: string, status : boolean, token : string) => {
    return authenCallApi(token).put(`/User/${userId}/${status}`)
}

const UserApi = {
    getAllUsers,
    getUserByUserId,
    updateUserStatus
}

export default UserApi;