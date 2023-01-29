import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ArtWorkService } from './artwork.service';
import { ArtWork } from './entities/art-work.entity';
import {
  CreateArtWorkInput,
  CreateArtWorkOutput,
} from './dto/createArtWork.dto';
import {
  UpdateArtWorkInput,
  UpdateArtWorkOutput,
} from './dto/update-art-work.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { User } from 'src/interfaces/users';
import { Collection } from 'src/collection/entities/collection.entity';
import { CollectionService } from 'src/collection/collection.service';

@Resolver(() => ArtWork)
export class ArtWorkResolver {
  constructor(
    private readonly artWorkService: ArtWorkService,
    private readonly collectionService: CollectionService,
  ) {}

  @UseGuards(AuthGuard)
  @Mutation(() => CreateArtWorkOutput)
  createArtWork(
    @AuthUser() authUser: User,
    @Args('createArtWorkInput') createArtWorkInput: CreateArtWorkInput,
  ): Promise<CreateArtWorkOutput> {
    return this.artWorkService.createArtWork(authUser, createArtWorkInput);
  }

  @Query(() => [ArtWork], { name: 'artWorks' })
  artWorks() {
    return this.artWorkService.artWorks();
  }

  @Query(() => ArtWork, { name: 'artWork' })
  artworkFromUserId(@Args('id', { type: () => Int }) id: string) {
    return this.artWorkService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => UpdateArtWorkOutput)
  updateArtWork(
    @AuthUser() authUser: User,
    @Args('updateArtWorkInput') updateArtWorkInput: UpdateArtWorkInput,
  ): Promise<UpdateArtWorkOutput> {
    return this.artWorkService.updateArtWork(authUser, updateArtWorkInput);
  }

  @ResolveField(() => [Collection])
  artWorkFromCollections(@Parent() artWork: ArtWork) {
    return this.collectionService.artWorkFromCollection(artWork.id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Boolean)
  removeArtWork(
    @AuthUser() authUser: User,
    @Args('id', { type: () => String }) id: string,
  ) {
    return this.artWorkService.removeArtWork(authUser, id);
  }
}
