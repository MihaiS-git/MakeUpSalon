import { Person } from "./person.model";
import { Status } from "./status.enum";
import { Treatment } from "./treatment.model";

export class Appointment {
  constructor(
    public appointmentId: number,
    public customerId: number,
    public startDateTime: Date,
    public endDateTime: Date,
    public dateCreated: Date,
    public approvalStatus: Status,
    public employeeId: number,
    public treatmentId: number
  ) { }
}
