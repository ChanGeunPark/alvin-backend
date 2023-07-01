import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
export declare class RestaurantService {
    create(createRestaurantInput: CreateRestaurantInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRestaurantInput: UpdateRestaurantInput): string;
    remove(id: number): string;
}
