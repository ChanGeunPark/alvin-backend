import { CreateCharacterInput, CreateCharacterOutput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CharacterService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ name, introduction, personality, worldView, characterImage, }: CreateCharacterInput): Promise<CreateCharacterOutput>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").AiCharacter[]>;
    findOne(id: string): string;
    update(id: string, updateCharacterInput: UpdateCharacterInput): string;
    remove(id: string): string;
}
