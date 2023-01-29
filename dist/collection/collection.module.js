"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionModule = void 0;
const common_1 = require("@nestjs/common");
const collection_service_1 = require("./collection.service");
const collection_resolver_1 = require("./collection.resolver");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const artwork_service_1 = require("../artwork/artwork.service");
let CollectionModule = class CollectionModule {
};
CollectionModule = __decorate([
    (0, common_1.Module)({
        providers: [
            collection_resolver_1.CollectionResolver,
            collection_service_1.CollectionService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
            artwork_service_1.ArtWorkService,
        ],
        exports: [collection_service_1.CollectionService],
    })
], CollectionModule);
exports.CollectionModule = CollectionModule;
//# sourceMappingURL=collection.module.js.map