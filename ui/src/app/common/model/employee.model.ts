export class Employee {
  constructor(
    public personId: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public dateOfBirth: Date,
    public address: string,
    public pictureUrl: string,
    public userId: number,
    /*   public List<EmployeeTreatment> employeeTreatments,
      public List<Appointment> customerAppointments,
      public List<Appointment> employeeAppointments, */
  ) { }
}
