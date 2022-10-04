import axios from "axios";
import { LoginNormalInput } from "../../models/LoginNormalInput";
import { ROOT_BASE_URL } from "../BaseUrl";


const ADMIN_API_BASE_URL = "https://localhost:44323/loginByGmail";

let token = "";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

class LoginService {

  async checkLoginByOauthIdTokenGmail(oauthIdTokenGmail: string) {
    return await axios.post(ROOT_BASE_URL + "api/loginByGmail", {
      oauthIdToken: oauthIdTokenGmail,
    }, config);
  }

  async checkLoginByUserNameAndPassword(loginNormal: LoginNormalInput) {
    return await axios.post(ROOT_BASE_URL + "api/login", loginNormal, config);
  }
}

export const rootLoginToken = localStorage.getItem('token') as string;

export default new LoginService();
