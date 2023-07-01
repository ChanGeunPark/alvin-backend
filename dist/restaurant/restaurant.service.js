"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantService = void 0;
const common_1 = require("@nestjs/common");
let RestaurantService = class RestaurantService {
    create(createRestaurantInput) {
        return 'This action adds a new restaurant';
    }
    findAll() {
        return `This action returns all restaurant`;
    }
    findOne(id) {
        return `This action returns a #${id} restaurant`;
    }
    update(id, updateRestaurantInput) {
        return `This action updates a #${id} restaurant`;
    }
    remove(id) {
        return `This action removes a #${id} restaurant`;
    }
};
RestaurantService = __decorate([
    (0, common_1.Injectable)()
], RestaurantService);
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant.service.js.map