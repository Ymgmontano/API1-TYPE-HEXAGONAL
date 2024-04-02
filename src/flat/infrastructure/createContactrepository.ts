import { createPool } from "../../mysql";
import { User } from "../domain/User";
import { ContactRepository } from "../domain/flat-repository";

export class InMemoryContactRepository implements ContactRepository {
  async getAll(): Promise<User[]> {
    console.log("Entered InMemoryContactRepository getAll");
    const connection = await createPool();
    const result: any[] = await connection.query("SELECT * FROM Contacto");

    if (result.length === 0) {
      return [];
    }
    const contac: any[] = result[0];
    console.log(`prueba ${JSON.stringify(contac)}`);
    return contac.map((Contact) => {
      return new Contact(
        Contact.Nombre,
        Contact.Email,
        Contact.Telefono,
        Contact.Mensaje
      );
    });
  }
}
