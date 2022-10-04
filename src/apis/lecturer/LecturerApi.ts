import { LecturerModelRequest } from '../../models/requests/lecturers/LecturerModelRequest';
import { authenCallApi, ROOT_BASE_URL } from '../BaseUrl';

const getAllLecturers = (token: string) => {
  return authenCallApi(token).get('/Lecturer/LecturerInfos');
};

const getAllLecturerType = (token: string) => {
  return authenCallApi(token).get('/Lecturer/LecturerTypes');
};

const getLecturerById = async (id: string, token: string) => {
  return await authenCallApi(token).get(`/Lecturer/${id}`);
};

const updateLecturerById = async (
  token: string,
  id: string,
  updateLecModel: LecturerModelRequest
) => {
  return await authenCallApi(token).put(`/Lecturer/${id}`, updateLecModel);
};

const updateLecStatus = async (token: string, id: string, status: boolean) => {
  return await authenCallApi(token).put(`/Lecturer/${id}/${status}`);
};

const addNewLecturer = async (token: string, lecturerModel: LecturerModelRequest) => {
  return await authenCallApi(token).post(`/Lecturer`, lecturerModel);
};

const LecturerApi = {
  getAllLecturerType,
  getAllLecturers,
  getLecturerById,
  updateLecturerById,
  updateLecStatus,
  addNewLecturer,
};

export default LecturerApi;
