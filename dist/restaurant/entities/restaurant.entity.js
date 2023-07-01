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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_entitiy_1 = require("../../common/entities/category.entitiy");
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Restaurant = class Restaurant extends core_entity_1.CoreEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Restaurant.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Restaurant.prototype, "coverImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_entitiy_1.Category, { nullable: true }),
    __metadata("design:type", category_entitiy_1.Category)
], Restaurant.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", user_entity_1.User)
], Restaurant.prototype, "owner", void 0);
Restaurant = __decorate([
    (0, graphql_1.InputType)('RestaurantInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Restaurant);
exports.Restaurant = Restaurant;
//# sourceMappingURL=restaurant.entity.js.map