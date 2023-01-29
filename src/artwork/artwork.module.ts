import { Module } from '@nestjs/common';
import { ArtWorkService } from './artwork.service';
import { ArtWorkResolver } from './artwork.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { CollectionService } from 'src/collection/collection.service';

@Module({
  providers: [
    ArtWorkResolver,
    ArtWorkService,
    CollectionService,
    PrismaService,
    ConfigService,
  ],
  exports: [ArtWorkService],
})
export class ArtWorkModule {}
