import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/users';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateArtWorkInput,
  CreateArtWorkOutput,
} from './dto/createArtWork.dto';
import { UpdateArtWorkInput } from './dto/update-art-work.input';

@Injectable()
export class ArtWorkService {
  constructor(private prisma: PrismaService) {}

  async createArtWork(
    user: User,
    createArtWorkInput: CreateArtWorkInput,
  ): Promise<CreateArtWorkOutput> {
    try {
      await this.prisma.artWork.create({
        data: {
          image: createArtWorkInput.image,
          title: createArtWorkInput.title,
          description: createArtWorkInput.description,
          height: createArtWorkInput.height,
          width: createArtWorkInput.width,
          userId: user.id,
        },
      });

      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async artWorks() {
    return await this.prisma.artWork.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} artWork`;
  }

  async updateArtWork(user: User, updateArtWorkInput: UpdateArtWorkInput) {
    try {
      const currentArtWork = await this.prisma.artWork.findUnique({
        where: {
          id: updateArtWorkInput.id,
        },
      });

      if (currentArtWork.userId !== user.id) throw new Error('Not authorized.');

      const artWork = await this.prisma.artWork.update({
        where: {
          id: updateArtWorkInput.id,
        },
        data: {
          image: updateArtWorkInput.image,
          title: updateArtWorkInput.title,
          description: updateArtWorkInput.description,
          height: updateArtWorkInput.height,
          width: updateArtWorkInput.width,
        },
      });
      return { ok: true, artWork };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async removeArtWork(user: User, id: string) {
    try {
      const artWork = await this.prisma.artWork.findUnique({
        where: {
          id: id,
        },
      });
      if (artWork.userId !== user.id) throw new Error('Not authorized.');
      await this.prisma.artWork.delete({
        where: {
          id: id,
        },
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  findAllByCollectionId(collectionId: string) {
    return `This action returns all artWork by collectionId #${collectionId}`;
  }
}
