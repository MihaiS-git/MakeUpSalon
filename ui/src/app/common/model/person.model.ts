export class Person {
  constructor(
    public personId: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public dateOfBirth: Date,
    public address: string,
    public pictureUrl: string,
    public userId: number,
    public treatmentIds: number[] = [],
    public customerAppointmentIds: number[] = [],
    public employeeAppointmentIds: number[] = []
  ) { }
}
