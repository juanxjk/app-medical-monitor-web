interface Service<T, Y = string> {
  findAll(): Promise<T[]>;
  findById(id: Y): Promise<T>;
  create(data: Omit<T, "id">): Promise<T>;
  update(id: Y, data: Partial<T>): Promise<T>;
  delete(id: Y): Promise<boolean>;
}

export default Service;
