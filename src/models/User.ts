export interface User {
  id: string;

  fullName: string;

  username: string;

  email: string;

  isVerified: boolean;

  isBanned: boolean;

  role: UserRole;

  createdAt: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}

export enum UserRole {
  Admin = "admin",
  Doctor = "doctor",
  Nurse = "nurse",
  Physiotherapist = "physiotherapist",
  Patient = "patient",
  Guest = "guest",
}

export default User;
