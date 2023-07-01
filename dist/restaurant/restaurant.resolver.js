"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const restaurant_service_1 = require("./restaurant.service");
const restaurant_entity_1 = require("./entities/restaurant.entity");
const create_restaurant_input_1 = require("./dto/create-restaurant.input");
const update_restaurant_input_1 = require("./dto/update-restaurant.input");
let RestaurantResolver = class RestaurantResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    createRestaurant(createRestaurantInput) {
        return this.restaurantService.create(createRestaurantInput);
    }
    findAll() {
        return this.restaurantService.findAll();
    }
    findOne(id) {
        return this.restaurantService.findOne(id);
    }
    updateRestaurant(updateRestaurantInput) {
        return this.restaurantService.update(updateRestaurantInput.id, updateRestaurantInput);
    }
    removeRestaurant(id) {
        return this.restaurantService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_entity_1.Restaurant),
    __param(0, (0, graphql_1.Args)('createRestaurantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_input_1.CreateRestaurantInput]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "createRestaurant", null);
__decorate([
    (0, graphql_1.Query)(() => [restaurant_entity_1.Restaurant], { name: 'restaurant' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => restaurant_entity_1.Restaurant, { name: 'restaurant' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_entity_1.Restaurant),
    __param(0, (0, graphql_1.Args)('updateRestaurantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_restaurant_input_1.UpdateRestaurantInput]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "updateRestaurant", null);
__decorate([
    (0, graphql_1.Mutation)(() => restaurant_entity_1.Restaurant),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "removeRestaurant", null);
RestaurantResolver = __decorate([
    (0, graphql_1.Resolver)(() => restaurant_entity_1.Restaurant),
    __metadata("design:paramtypes", [restaurant_service_1.RestaurantService])
], RestaurantResolver);
exports.RestaurantResolver = RestaurantResolver;
//# sourceMappingURL=restaurant.resolver.js.map