import Device from "../models/Device";
import Service from "./Service";

export class DeviceService implements Service<Device> {
  findAll(): Promise<Device[]> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<Device> {
    throw new Error("Method not implemented.");
  }

  create(data: Omit<Device, "id">): Promise<Device> {
    throw new Error("Method not implemented.");
  }

  update(id: string, data: Partial<Device>): Promise<Device> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default DeviceService;
