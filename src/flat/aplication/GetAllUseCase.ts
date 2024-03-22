import { User } from "../domain/User";
import { ContactRepository } from "../domain/flat-repository";

export class GetAllUsers {
  constructor(private readonly musicRepository: ContactRepository) {}
  async execute(): Promise<User[]> {
    const user = await this.musicRepository.getAll();
    return user;
  }
}
