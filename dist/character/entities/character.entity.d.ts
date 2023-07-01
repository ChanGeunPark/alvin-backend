import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Character extends CoreEntity {
    name: string;
    worldView?: string;
    introduction: string;
    personality?: string;
    characterImage?: string;
}
