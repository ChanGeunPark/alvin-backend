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
exports.ArtWorkResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const artwork_service_1 = require("./artwork.service");
const art_work_entity_1 = require("./entities/art-work.entity");
const createArtWork_dto_1 = require("./dto/createArtWork.dto");
const update_art_work_input_1 = require("./dto/update-art-work.input");
const auth_guard_1 = require("../auth/auth.guard");
const common_1 = require("@nestjs/common");
const auth_user_decorator_1 = require("../auth/auth-user.decorator");
const collection_entity_1 = require("../collection/entities/collection.entity");
const collection_service_1 = require("../collection/collection.service");
let ArtWorkResolver = class ArtWorkResolver {
    constructor(artWorkService, collectionService) {
        this.artWorkService = artWorkService;
        this.collectionService = collectionService;
    }
    createArtWork(authUser, createArtWorkInput) {
        return this.artWorkService.createArtWork(authUser, createArtWorkInput);
    }
    artWorks() {
        return this.artWorkService.artWorks();
    }
    artworkFromUserId(id) {
        return this.artWorkService.findOne(id);
    }
    updateArtWork(authUser, updateArtWorkInput) {
        return this.artWorkService.updateArtWork(authUser, updateArtWorkInput);
    }
    artWorkFromCollections(artWork) {
        return this.collectionService.artWorkFromCollection(artWork.id);
    }
    removeArtWork(authUser, id) {
        return this.artWorkService.removeArtWork(authUser, id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => createArtWork_dto_1.CreateArtWorkOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)('createArtWorkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createArtWork_dto_1.CreateArtWorkInput]),
    __metadata("design:returntype", Promise)
], ArtWorkResolver.prototype, "createArtWork", null);
__decorate([
    (0, graphql_1.Query)(() => [art_work_entity_1.ArtWork], { name: 'artWorks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtWorkResolver.prototype, "artWorks", null);
__decorate([
    (0, graphql_1.Query)(() => art_work_entity_1.ArtWork, { name: 'artWork' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtWorkResolver.prototype, "artworkFromUserId", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => update_art_work_input_1.UpdateArtWorkOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)('updateArtWorkInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_art_work_input_1.UpdateArtWorkInput]),
    __metadata("design:returntype", Promise)
], ArtWorkResolver.prototype, "updateArtWork", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [collection_entity_1.Collection]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [art_work_entity_1.ArtWork]),
    __metadata("design:returntype", void 0)
], ArtWorkResolver.prototype, "artWorkFromCollections", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ArtWorkResolver.prototype, "removeArtWork", null);
ArtWorkResolver = __decorate([
    (0, graphql_1.Resolver)(() => art_work_entity_1.ArtWork),
    __metadata("design:paramtypes", [artwork_service_1.ArtWorkService,
        collection_service_1.CollectionService])
], ArtWorkResolver);
exports.ArtWorkResolver = ArtWorkResolver;
//# sourceMappingURL=artwork.resolver.js.map