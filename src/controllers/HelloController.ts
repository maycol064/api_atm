import { Request, Response } from "express";

class HelloController {
  public helloWorld(req: Request, res: Response) {
    res.json({ message: 'Hola mundo' })
  }
}

export default new HelloController();