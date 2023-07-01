import { User } from 'src/interfaces/users';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArtWorkInput, CreateArtWorkOutput } from './dto/createArtWork.dto';
import { UpdateArtWorkInput } from './dto/update-art-work.input';
export declare class ArtWorkService {
    private prisma;
    constructor(prisma: PrismaService);
    createArtWork(user: User, createArtWorkInput: CreateArtWorkInput): Promise<CreateArtWorkOutput>;
    artWorks(): Promise<import(".prisma/client").ArtWork[]>;
    findOne(id: string): string;
    updateArtWork(user: User, updateArtWorkInput: UpdateArtWorkInput): Promise<{
        ok: boolean;
        artWork: import(".prisma/client").ArtWork;
        error?: undefined;
    } | {
        ok: boolean;
        error: any;
        artWork?: undefined;
    }>;
    removeArtWork(user: User, id: string): Promise<boolean>;
    findAllByCollectionId(collectionId: string): string;
}
