import { Treatment } from "./treatment.model";

export class AppointmentItem {
  public id: number;
  public name: string;
  public description: string;
  public pictureUrl: string;
  public estimatedDuration: number;
  public price: number;
  public startDate: Date;

  constructor(treatment: Treatment) {
    this.id = treatment.treatmentId;
    this.name = treatment.name;
    this.description = treatment.description;
    this.pictureUrl = treatment.pictureUrl;
    this.estimatedDuration = treatment.estimatedDuration;
    this.price = treatment.price;
  }

}


