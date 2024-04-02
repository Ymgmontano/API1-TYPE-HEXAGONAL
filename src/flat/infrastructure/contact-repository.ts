import { CreateContact } from "../domain/CreateContact";
import { User } from "../domain/User";
import amqp from 'amqplib';

const rabbitSettings = {
  protocol: 'amqp',
  hostname: '44.195.183.226',
  port: 5672,
  username: 'guest',
  password: 'guest',
};

export class AddContactRepository implements CreateContact {
  async addContact(
    Nombre: string,
    Email: string,
    Telefono: string,
    Mensaje: string
  ): Promise<User | null> {
    try {

      const contact = new User(Nombre, Email, Telefono, Mensaje);

      const queue = "Contacto";
      const message = JSON.stringify(contact);
      console.log(message);

      try {
        const conn = await amqp.connect(rabbitSettings);
        console.log('Conexión exitosa');

        const channel = await conn.createChannel();
        console.log('Canal creado exitosamente');

        const res = await channel.assertQueue(queue);
        console.log('Cola creada exitosamente', res);

        await channel.sendToQueue(queue, Buffer.from(message));

        console.log(`Mensaje insertado en la cola: ${message}`);

      } catch (error) {
        console.log(error)
        throw error;
      }


      return contact;
    } catch (error) {
      throw new Error(`No se pudo agregar el contacto: ${error}`);
    } finally {
    }
  }
}