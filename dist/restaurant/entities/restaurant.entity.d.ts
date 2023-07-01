import { Category } from 'src/common/entities/category.entitiy';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Restaurant extends CoreEntity {
    name: string;
    address: string;
    coverImage: string;
    category: Category;
    owner: User;
}
