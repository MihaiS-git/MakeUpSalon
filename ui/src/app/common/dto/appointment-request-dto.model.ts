import { Status } from "../model/status.enum";

export class AppointmentRequestDto {
  customerId: number;
  startDateTime: string;
  approvalStatus: Status;
  employeeId: number;
  treatmentId: number;

  constructor(customerId: number, startDateTime: string, employeeId: number, treatmentId:number) {
    this.customerId = customerId;
    this.startDateTime = startDateTime;
    this.approvalStatus = Status.PENDING;
    this.employeeId = employeeId;
    this.treatmentId = treatmentId;
  }

}


