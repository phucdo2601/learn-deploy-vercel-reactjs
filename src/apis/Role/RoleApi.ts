import axios from "axios";
import { authenCallApi, ROOT_BASE_URL } from "../BaseUrl";

const getRole = async (token: string) => {
  return await authenCallApi(token).get("/Role/Roles");
}

const RoleApi = {
  getRole,
}

export default RoleApi;