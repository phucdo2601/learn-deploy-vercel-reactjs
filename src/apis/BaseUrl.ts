import axios, { AxiosResponse } from "axios";

export const ROOT_BASE_URL = "https://salaryconfirm.azurewebsites.net/";

export const authenCallApi = (token: string) => {
  const instance = axios.create({
    baseURL: ROOT_BASE_URL + "api",
    timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + token }
  });

  instance.interceptors.request.use(
    (config: any) => {

      return config;
    }
  )

  instance.interceptors.response.use(
    (res: AxiosResponse) => {

      // console.log("responsed");
      if (res.status === 404) {
        // alert("User response doesn't have permission!");
      }
      return res;
    },
    (err) => {
      if (err.request.status === 401) {
        // alert("User request doesn't have permission!");
      }
    }
  )

  return instance;
}



