import { CoreOutput } from 'src/common/dtos/output.dto';
export declare class CreateCharacterInput {
    name: string;
    worldView?: string;
    introduction: string;
    personality?: string;
    characterImage?: string;
}
export declare class CreateCharacterOutput extends CoreOutput {
}
