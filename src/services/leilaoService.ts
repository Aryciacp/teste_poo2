import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
  async criarLeilao(produto: string, preco: number, dataLimite: Date, donoId: number) {
  }

  async fecharLeilao(leilaoId: number): Promise<number> {
  }

}

export default new LeilaoService();