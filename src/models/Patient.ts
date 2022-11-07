import Device from "./Device";

export interface Patient {
  id: string;

  fullName: string;

  cpf: string;

  gender: GenderType;

  birthDate: Date;

  status: PatientStatus;

  bed?: string;

  note?: string;

  prognosis?: string;

  illnesses: Array<string>;

  comorbidities: Array<string>;

  devices?: Device[];

  createdAt: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}

export enum GenderType {
  Masculine = "masculine",
  Feminine = "feminine",
}

export enum PatientStatus {
  None = "none",
  Waiting = "waiting",
  Treatment = "treatment",
  Discharged = "discharged",
}

export default Patient;
