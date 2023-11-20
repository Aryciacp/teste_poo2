import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
  async criarLance(valor: number, compradorId: number, leilaoId: number) {
  }

}

export default new LanceService();