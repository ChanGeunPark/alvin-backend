import { CharacterService } from './character.service';
import { CreateCharacterInput, CreateCharacterOutput } from './dto/create-character.input';
import { UpdateCharacterInput } from './dto/update-character.input';
export declare class CharacterResolver {
    private readonly characterService;
    constructor(characterService: CharacterService);
    createCharacter(createCharacterInput: CreateCharacterInput): Promise<CreateCharacterOutput>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").AiCharacter[]>;
    findOne(id: string): string;
    updateCharacter(updateCharacterInput: UpdateCharacterInput): string;
    removeCharacter(id: string): string;
}
