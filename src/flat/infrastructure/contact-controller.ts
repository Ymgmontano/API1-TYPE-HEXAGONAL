import { Request, Response } from "express";

import { GetAllUsers } from "../aplication/GetAllUseCase";

export class MusicController {
  constructor(private readonly getAllUseCase: GetAllUsers) {}

  async getAllUsers(req: Request, res: Response) {
    try {
      const contact = await this.getAllUseCase.execute();
      res.status(200).send(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to get musics" });
    }
  }
}
