import { User } from "./User";

export interface CreateContact {
  addContact(
    Nombre: string,
    Email: string,
    Telefono: string,
    Mensaje: string
  ): Promise<User | null>;
}
