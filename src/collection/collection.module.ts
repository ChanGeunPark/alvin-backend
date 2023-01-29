import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionResolver } from './collection.resolver';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArtWorkService } from 'src/artwork/artwork.service';

@Module({
  providers: [
    CollectionResolver,
    CollectionService,
    PrismaService,
    ConfigService,
    ArtWorkService,
  ],
  exports: [CollectionService],
})
export class CollectionModule {}
