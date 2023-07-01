import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CollectionService } from './collection.service';
import { Collection } from './entities/collection.entity';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ArtWork } from 'src/artwork/entities/art-work.entity';
import { ArtWorkService } from 'src/artwork/artwork.service';

@Resolver(() => Collection)
export class CollectionResolver {
  constructor(
    private readonly collectionService: CollectionService,
    private readonly artworkService: ArtWorkService,
  ) {}

  @UseGuards(AuthGuard)
  @Mutation(() => Collection)
  createCollection(
    @Args('createCollectionInput') createCollectionInput: CreateCollectionInput,
  ) {
    return this.collectionService.create(createCollectionInput);
  }

  @Query(() => [Collection], { name: 'collections' })
  collections() {
    return this.collectionService.findAll();
  }

  // @ResolveField(() => [ArtWork], { name: 'artworks', nullable: true })
  // artworks(@Parent() collection: Collection) {
  //   return this.artworkService.findAllByCollectionId(collection.id);
  // }

  @Query(() => Collection, { name: 'collection' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.collectionService.findOne(id);
  }

  @Mutation(() => Collection)
  updateCollection(
    @Args('updateCollectionInput') updateCollectionInput: UpdateCollectionInput,
  ) {
    return this.collectionService.update(
      updateCollectionInput.id,
      updateCollectionInput,
    );
  }

  @Mutation(() => Collection)
  removeCollection(@Args('id', { type: () => Int }) id: number) {
    return this.collectionService.remove(id);
  }
}
