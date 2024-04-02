import { User } from "../domain/User";
import { ContactRepository } from "../domain/flat-repository";

export class GetAllUsers {
  constructor(private readonly contactRepository: ContactRepository) {}
  async execute(): Promise<User[]> {
    const user = await this.contactRepository.getAll();
    return user;
  }
}
