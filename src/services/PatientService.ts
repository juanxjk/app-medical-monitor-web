import Service from "./Service";
import Patient from "../models/Patient";

export class PatientService implements Service<Patient> {
  findAll(): Promise<Patient[]> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<Patient> {
    throw new Error("Method not implemented.");
  }

  create(data: Omit<Patient, "id">): Promise<Patient> {
    throw new Error("Method not implemented.");
  }

  update(id: string, data: Partial<Patient>): Promise<Patient> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
