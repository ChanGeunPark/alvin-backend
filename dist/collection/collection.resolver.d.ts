import { CollectionService } from './collection.service';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
import { ArtWorkService } from 'src/artwork/artwork.service';
export declare class CollectionResolver {
    private readonly collectionService;
    private readonly artworkService;
    constructor(collectionService: CollectionService, artworkService: ArtWorkService);
    createCollection(createCollectionInput: CreateCollectionInput): string;
    collections(): Promise<import(".prisma/client").Collection[]>;
    findOne(id: number): string;
    updateCollection(updateCollectionInput: UpdateCollectionInput): string;
    removeCollection(id: number): string;
}
