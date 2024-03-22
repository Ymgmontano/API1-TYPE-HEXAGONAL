import { createPool } from "../../mysql";
import { User } from "../domain/User";
import { ContactRepository } from "../domain/flat-repository";

export class InMemoryMusicRepository implements ContactRepository {
  async getAll(): Promise<User[]> {
    console.log("Entered InMemoryMusicRepository getAll");
    const connection = await createPool();
    const result: any[] = await connection.query("SELECT * FROM Musics");

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
