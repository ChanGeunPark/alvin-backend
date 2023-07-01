import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
export declare class Category extends CoreEntity {
    name: string;
    coverImage: string;
    restaurants: Restaurant[];
}
