export interface PaySlipItemModel {
    paySlipItemId : string;
    paySlipItemName : string;
    numberOfTasks : number;
    actualTeachingHours: number;
    actualNumberOfWorkingDays : number;
    numberOfWorkingDaysInAmonth : number;
    planSupplement : number;
    performanceCoefficientOfWork : number;
    planManagementSupplement  : number;
    taskSalary : number;
    basicSalary : number;
    fundamentalSalary : number;
    welfareSalary : number;
    taskId : string;
    basicSalaryId : string;
    fundamentalSalaryId : string;
    welfareId : string;
    lecturerTypeId : string;
    paySlipId: string;
}