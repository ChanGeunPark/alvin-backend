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
exports.CollectionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const collection_service_1 = require("./collection.service");
const collection_entity_1 = require("./entities/collection.entity");
const create_collection_input_1 = require("./dto/create-collection.input");
const update_collection_input_1 = require("./dto/update-collection.input");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const artwork_service_1 = require("../artwork/artwork.service");
let CollectionResolver = class CollectionResolver {
    constructor(collectionService, artworkService) {
        this.collectionService = collectionService;
        this.artworkService = artworkService;
    }
    createCollection(createCollectionInput) {
        return this.collectionService.create(createCollectionInput);
    }
    collections() {
        return this.collectionService.findAll();
    }
    findOne(id) {
        return this.collectionService.findOne(id);
    }
    updateCollection(updateCollectionInput) {
        return this.collectionService.update(updateCollectionInput.id, updateCollectionInput);
    }
    removeCollection(id) {
        return this.collectionService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => collection_entity_1.Collection),
    __param(0, (0, graphql_1.Args)('createCollectionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_collection_input_1.CreateCollectionInput]),
    __metadata("design:returntype", void 0)
], CollectionResolver.prototype, "createCollection", null);
__decorate([
    (0, graphql_1.Query)(() => [collection_entity_1.Collection], { name: 'collections' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CollectionResolver.prototype, "collections", null);
__decorate([
    (0, graphql_1.Query)(() => collection_entity_1.Collection, { name: 'collection' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CollectionResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => collection_entity_1.Collection),
    __param(0, (0, graphql_1.Args)('updateCollectionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_collection_input_1.UpdateCollectionInput]),
    __metadata("design:returntype", void 0)
], CollectionResolver.prototype, "updateCollection", null);
__decorate([
    (0, graphql_1.Mutation)(() => collection_entity_1.Collection),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CollectionResolver.prototype, "removeCollection", null);
CollectionResolver = __decorate([
    (0, graphql_1.Resolver)(() => collection_entity_1.Collection),
    __metadata("design:paramtypes", [collection_service_1.CollectionService,
        artwork_service_1.ArtWorkService])
], CollectionResolver);
exports.CollectionResolver = CollectionResolver;
//# sourceMappingURL=collection.resolver.js.map