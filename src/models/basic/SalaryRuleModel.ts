export interface SalaryRuleModel {
    salaryRuleId : string;
    maxTeachingHoursOfLecturer : number;
    minSalaryOfElementarySchoolTeachers : number;
    summerPlanSalaryOfElementarySchoolTeachers :number;
    maxTeachingHoursOfManagementLecturerFschool : number;
    maxTeachingHoursOfManagementLecturer : number;
    maxCoefficientXandY : number;
    minCoefficientXandY : number;
    summerPlanSalaryOfResearcher : number;
    maxTeachingHoursOfForeignLecturerFschool : number;
    maxTeachingHoursOfForeignLecturer : number;
    summerSalaryOfForeignLecturer : number;
    maxTeachingHoursOfStaff : number;
    minFofResearcher : number;
    minFofUniversityLevelLecturer : number;
    calculationStartDate : string;
    calculationEndDate : string;
    salaryPayDate : string;
    salDegreeNo : string;
}