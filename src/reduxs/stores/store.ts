import { configureStore } from '@reduxjs/toolkit';
import basicSalarySlice from '../slices/general/basicSalarySlice';
import departmentSlice from '../slices/general/departmentSlice';
import feSalarySlice from '../slices/general/feSalarySlice';
import kanban from '../slices/general/kanban';
import lectureTypeSlice from '../slices/general/lectureTypeSlice';
import roleSlice from '../slices/general/roleSlice';
const store1 = configureStore({
  reducer: {
    roles: roleSlice,
    department: departmentSlice,
    basicSalary: basicSalarySlice,
    lectureType: lectureTypeSlice,
    feSalary: feSalarySlice,
    kanban: kanban,
  },
  devTools: true,
});

// create AppDispatch de call dc api tu reudx-tk +ts
type StoreType = typeof store1;
export type AppDispatch = StoreType['dispatch'];
type Config = {
  dispatch: AppDispatch;
};

export type RootState = ReturnType<typeof store1.getState>;

export default store1;
