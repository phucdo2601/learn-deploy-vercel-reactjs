import { StaffTrainingRoomModel } from "../../basic/StaffTrainingRoomModel";
import { UserModelResponse } from "../Users/UserModelResponse";

export interface StaffTrainingModelResponse extends UserModelResponse {
    staffTraingRoom?: StaffTrainingRoomModel;
}