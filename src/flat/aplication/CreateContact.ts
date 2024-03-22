import { CreateContact } from "../domain/CreateContact";

export class PostContact {
  constructor(private readonly addContact: CreateContact) {}

  async createContact(
    Nombre: string,
    Email: string,
    Telefono: string,
    Mensaje: string
  ) {
    try {
      const contact = await this.addContact.addContact(
        Nombre,
        Email,
        Telefono,
        Mensaje
      );
      if (!contact) {
        throw new Error(`Contacto ${Nombre} no se agregado`);
      }
      return contact;
    } catch (error) {
      throw error;
    }
  }
}
