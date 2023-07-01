import { RestaurantService } from './restaurant.service';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createRestaurant(createRestaurantInput: CreateRestaurantInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateRestaurant(updateRestaurantInput: UpdateRestaurantInput): string;
    removeRestaurant(id: number): string;
}
