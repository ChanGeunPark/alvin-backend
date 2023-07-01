import { Injectable } from '@nestjs/common';
import {
  CreateCharacterInput,
  CreateCharacterOutput,
} from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    introduction,
    personality,
    worldView,
    characterImage,
  }: CreateCharacterInput): Promise<CreateCharacterOutput> {
    try {
      await this.prisma.aiCharacter.create({
        data: {
          name,
          introduction,
          personality,
          worldView,
          characterImage,
        },
      });

      return { ok: true };
    } catch (e) {
      return { ok: true, error: e };
    }
  }

  findAll() {
    return this.prisma.aiCharacter.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} character`;
  }

  update(id: string, updateCharacterInput: UpdateCharacterInput) {
    return `This action updates a #${id} character`;
  }

  remove(id: string) {
    return `This action removes a #${id} character`;
  }
}
