import User from "../models/User";
import Service from "./Service";

class UserService implements Service<User> {
  findAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  create(data: Omit<User, "id">): Promise<User> {
    throw new Error("Method not implemented.");
  }

  update(id: string, data: Partial<User>): Promise<User> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default UserService;
