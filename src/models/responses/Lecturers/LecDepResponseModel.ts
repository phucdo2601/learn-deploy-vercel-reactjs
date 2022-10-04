export interface LecDepResponseModel {
    lecturerDeparmentId: string,
    startDate: string,
    endDate: string,
    isWorking: boolean,
    modifiedDate: string,
    lecturerPositionId: string,
    lecturerId: string,
    departmentId: string,
    department: {
        departmentId: string,
        departmentName: string,
        isDisable: boolean,
        schoolId: string,
        school: {
            schoolId: string,
            schoolName: string,
            address: string,
            isDisable: boolean,
            schoolTypeId: string,
            schoolType: {}
        }
    }
}