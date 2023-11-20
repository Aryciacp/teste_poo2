import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoJob {
  async fecharLeilao(leilaoId: number): Promise<number> {
    // Implementação para fechar um leilão
  }
}

export default new LeilaoJob();
