import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import LecturerApi from '../../../apis/lecturer/LecturerApi';
import { LecturerType } from '../../../models/basic/LecturerType';

const initialState = [] as Array<LecturerType>;
const token = localStorage.getItem('token') as string;
export const getAllLectureType = createAsyncThunk('lectureType/getAll', async () => {
  const res = await LecturerApi.getAllLecturerType(token);
  return res.data;
});

const lectureTypeSlice = createSlice({
  name: 'lectureType',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(
      getAllLectureType.fulfilled,
      (state: Array<LecturerType>, action: PayloadAction<any>) => {
        return [...action.payload];
      }
    );
  },
});

export default lectureTypeSlice.reducer;
