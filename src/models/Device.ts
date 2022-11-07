import Patient from "./Patient";

export interface Device {
  id: string;

  title: string;

  description?: string;

  status: DeviceStatus;

  canMeasureHeartRate: boolean;

  canMeasureO2Pulse: boolean;

  canMeasureTemp: boolean;

  patient?: Patient;

  createdAt: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}

export enum DeviceStatus {
  None = "none",
  Active = "active",
  Maintenance = "maintenance",
  Inactive = "inactive",
}

export default Device;
