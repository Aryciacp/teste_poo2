import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  async cadastrarUsuario(nome: string, email: string) {
  }

}

export default new UsuarioService();