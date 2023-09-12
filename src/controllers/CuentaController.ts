import { Request, Response } from 'express';
import { Cuenta } from '../Models/cuenta';
import Cliente from '../Models/client';

class CuentaController {
  constructor() { }

  public async validar_cuenta(req: Request, res: Response) {
    if (req === null) return;
    const { nip, cuenta } = req.body;
    try {
      const isValid = await Cuenta.findOne({
        where: {
          NIP: nip,
          n_cuenta: cuenta
        },
        include: [{
          model: Cliente,
          required: true,
        }]
      });
      console.log(isValid)
      return res.json(isValid).status(200);
    } catch (error) {
      console.log(error)
      return res.json({ error }).status(400);
    }
  }
}

export default new CuentaController();