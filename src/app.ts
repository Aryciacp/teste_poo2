import express from 'express';
import lanceRoutes from './routes/lanceRoutes';
import leilaoRoutes from './routes/leilaoRoutes';
import usuarioRoutes from './routes/usuarioRoutes';

const app = express();

app.use(express.json());

app.use('/lance', lanceRoutes);
app.use('/leilao', leilaoRoutes);
app.use('/usuario', usuarioRoutes);

export default app;
