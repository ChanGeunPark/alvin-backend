import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterResolver } from './character.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CharacterResolver, CharacterService, PrismaService],
})
export class CharacterModule {}
