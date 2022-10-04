import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import BasicSalaryApi from '../../../apis/basicSalary/BasicSalaryApi';
import { BasicSalaryModel } from '../../../models/basic/BasicSalaryModel';

const initialState = [] as Array<BasicSalaryModel>;
const token = localStorage.getItem('token') as string;
export const getAllBasicSalary = createAsyncThunk('basicSalary/getAll', async () => {
  const res = await BasicSalaryApi.getAllBasicSals(token);
  return res.data;
});

const basicSalarySlice = createSlice({
  name: 'basicSalary',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(
      getAllBasicSalary.fulfilled,
      (state: Array<BasicSalaryModel>, action: PayloadAction<any>) => {
        return [...action.payload];
      }
    );
  },
});

export default basicSalarySlice.reducer;
