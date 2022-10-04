import { GeneralUserInfoMModel } from '../../models/basic/GeneralUserInfoModel';
import { ROOT_BASE_URL, authenCallApi } from '../BaseUrl';

const getAllUserInfo = async (token: string) => {
    return await authenCallApi(token).get(ROOT_BASE_URL + 'api/GeneralUserInfoes');
}

const createNewUserInfo = async (token: string, genralUserInfo : GeneralUserInfoMModel) => {
    return await authenCallApi(token).post(ROOT_BASE_URL + 'api/GeneralUserInfoes', genralUserInfo)
}

const GenralUserInfoApi = {
    getAllUserInfo,
    createNewUserInfo
}

export default GenralUserInfoApi;