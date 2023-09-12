import { Request, Response } from "express";
import Cliente from "../Models/client";

class ClienteController {
  constructor() { }

  public async getCliente(req: Request, res: Response) {
    if (req.body === null) return;
    try {
      const client = await Cliente.findByPk(req.body.id);
      return res.json({ client }).status(200);
    } catch (error) {
      return res.json({ error }).status(400);
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const clients = await Cliente.findAll();
      console.log(clients)
      return res.json({ clients }).status(200);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default new ClienteController();