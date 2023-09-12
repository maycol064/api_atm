import express from 'express';
import helloRouter from '../src/routes/HelloRoutes';
import clientRouter from '../src/routes/ClienteRoutes'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', helloRouter);

// Cliente
app.use('/api/cliente', clientRouter)

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto ${port}`);
});
