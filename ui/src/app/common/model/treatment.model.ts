export class Treatment {
  constructor(
    public treatmentId: number,
    public name: string,
    public description: string,
    public estimatedDuration: number,
    public price: number,
    public pictureUrl: string,
    public employeeIds: number[] = []
  ) { }
}
