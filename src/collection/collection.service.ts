import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';

@Injectable()
export class CollectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  create(createCollectionInput: CreateCollectionInput) {
    return 'This action adds a new collection';
  }

  async findAll() {
    const collections = await this.prisma.collection.findMany();
    return collections;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  async userFromCollection(userId: string) {
    return await this.prisma.collection.findMany({
      where: {
        userId,
      },
    });
  }

  async artWorkFromCollection(artWorkId: string) {
    return await this.prisma.collection.findMany({
      where: {
        artworkId: artWorkId,
      },
    });
  }

  update(id: number, updateCollectionInput: UpdateCollectionInput) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
