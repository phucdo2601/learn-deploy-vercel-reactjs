import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import RoleApi from '../../../apis/Role/RoleApi';
import { RoleModel } from '../../../models/basic/RoleModel';

interface IRoleState {
  role: RoleModel;
}

const initialState = [] as Array<RoleModel>;

const token = localStorage.getItem('token') as string;
export const getAllRoles = createAsyncThunk('roles/getAll', async () => {
  const res = await RoleApi.getRole(token);
  return res.data;
});
const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  // goi thuc thi cac api trong redux-toolkit+ts
  extraReducers: (builder) => {
    builder.addCase(
      getAllRoles.fulfilled,
      (state: Array<RoleModel>, action: PayloadAction<any>) => {
        return [...action.payload];
      }
    );
  },
});
export default roleSlice.reducer;
