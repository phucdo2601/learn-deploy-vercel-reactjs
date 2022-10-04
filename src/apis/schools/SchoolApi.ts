import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";

const getAllSchools = async (token: string) => {
    return await authenCallApi(token).get('/School/Schools');
}

const SchoolApi = {
    getAllSchools,
}

export default SchoolApi;