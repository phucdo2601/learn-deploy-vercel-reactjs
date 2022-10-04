import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import DepartmentApi from '../../../apis/departments/DepartmentApi';
import { rootLoginToken } from '../../../apis/login/LoginApi';
import { DepartmentModel } from '../../../models/basic/DepartmentModel';
import { DepartmentRequest } from '../../../models/requests/Departments/DepartmentRequest';

const initialState = [] as Array<DepartmentModel>;
const token = localStorage.getItem('token') as string;

export const getAllDepartment = createAsyncThunk('department/getAll', async () => {
  const res = await DepartmentApi.getAllDepartments(token);
  return res.data;
});

export const createNewDepartment = createAsyncThunk(
  'department/create',
  async (model: DepartmentRequest) => {
    const res = await DepartmentApi.addNewDep(rootLoginToken, model);
    return res.data;
  }
)

export const updateDepByDepId = createAsyncThunk(
  'department/updateDepByDepId',
  async (model: DepartmentModel) => {
    let data = {
      departmentName: model.departmentName,
      isDisable: model.isDisable,
      schoolId: model.schoolId,
    }
    const res = await DepartmentApi.updateDepByDepId(rootLoginToken, model.departmentId, data);
    return res.data;
  }
)

interface updateDepStatusReq {
  id: string;
  status: boolean | any;
}

export const updateStatusDepByDepId = createAsyncThunk(
  'department/updateDepStatusByDepId',
  async (requestModel: updateDepStatusReq) => {
    const res = await DepartmentApi.updateStatusDepByDepId(rootLoginToken, requestModel.id, requestModel.status);
    return res.data;
  }
)

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getAllDepartment.fulfilled,
      (state: Array<DepartmentModel>, action: PayloadAction<any>) => {
        return [...action.payload];
      }
    );
  },
});

export default departmentSlice.reducer;
