import { ArtWorkService } from './artwork.service';
import { ArtWork } from './entities/art-work.entity';
import { CreateArtWorkInput, CreateArtWorkOutput } from './dto/createArtWork.dto';
import { UpdateArtWorkInput, UpdateArtWorkOutput } from './dto/update-art-work.input';
import { User } from 'src/interfaces/users';
import { CollectionService } from 'src/collection/collection.service';
export declare class ArtWorkResolver {
    private readonly artWorkService;
    private readonly collectionService;
    constructor(artWorkService: ArtWorkService, collectionService: CollectionService);
    createArtWork(authUser: User, createArtWorkInput: CreateArtWorkInput): Promise<CreateArtWorkOutput>;
    artWorks(): Promise<import(".prisma/client").ArtWork[]>;
    artworkFromUserId(id: string): string;
    updateArtWork(authUser: User, updateArtWorkInput: UpdateArtWorkInput): Promise<UpdateArtWorkOutput>;
    artWorkFromCollections(artWork: ArtWork): Promise<import(".prisma/client").Collection[]>;
    removeArtWork(authUser: User, id: string): Promise<boolean>;
}
