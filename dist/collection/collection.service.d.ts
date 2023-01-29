import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollectionInput } from './dto/create-collection.input';
import { UpdateCollectionInput } from './dto/update-collection.input';
export declare class CollectionService {
    private readonly prisma;
    private readonly configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    create(createCollectionInput: CreateCollectionInput): string;
    findAll(): Promise<import(".prisma/client").Collection[]>;
    findOne(id: number): string;
    userFromCollection(userId: string): Promise<import(".prisma/client").Collection[]>;
    artWorkFromCollection(artWorkId: string): Promise<import(".prisma/client").Collection[]>;
    update(id: number, updateCollectionInput: UpdateCollectionInput): string;
    remove(id: number): string;
}
