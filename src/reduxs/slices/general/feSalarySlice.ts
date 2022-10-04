import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import FESalaryApi from '../../../apis/feSalary/FESalaryApi';
import { FESalaryModel } from '../../../models/basic/FESalaryModel';

const initialState = [] as Array<FESalaryModel>;
const token = localStorage.getItem('token') as string;
export const getAllFESalary = createAsyncThunk('feSalary/getAll', async () => {
  const res = await FESalaryApi.getAllFESalaries(token);
  return res.data;
});

const feSalarySlice = createSlice({
  name: 'basicSalary',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(
      getAllFESalary.fulfilled,
      (state: Array<FESalaryModel>, action: PayloadAction<any>) => {
        return [...action.payload];
      }
    );
  },
});

export default feSalarySlice.reducer;
