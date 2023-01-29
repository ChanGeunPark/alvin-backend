import { CoreEntity } from 'src/common/entities/core.entity';
export declare class ArtWork extends CoreEntity {
    title: string;
    description?: string;
    image?: string;
    width?: number;
    height?: number;
    userId: string;
}
