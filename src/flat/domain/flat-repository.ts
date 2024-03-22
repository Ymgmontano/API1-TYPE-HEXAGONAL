import { User } from "./User";

export interface ContactRepository {
  getAll(): Promise<User[]>;
}
