import { PostContact } from "../aplication/CreateContact";
import { GetAllUsers } from "../aplication/GetAllUseCase";
import { CreateContactController } from "./createContact-controller";
import { InMemoryMusicRepository } from "./createContactrepository";
import { MusicController } from "./contact-controller";
import { AddContactRepository } from "./contact-repository";

const musicRepository = new InMemoryMusicRepository();
const getAllMusicsUseCase = new GetAllUsers(musicRepository);
const musicController = new MusicController(getAllMusicsUseCase);

export { getAllMusicsUseCase, musicController };

const musicRepositor = new AddContactRepository();
const createMusic = new PostContact(musicRepositor);
const PostContactController = new CreateContactController(createMusic);

export { createMusic, PostContactController };