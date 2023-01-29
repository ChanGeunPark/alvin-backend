"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtWorkModule = void 0;
const common_1 = require("@nestjs/common");
const artwork_service_1 = require("./artwork.service");
const artwork_resolver_1 = require("./artwork.resolver");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
const collection_service_1 = require("../collection/collection.service");
let ArtWorkModule = class ArtWorkModule {
};
ArtWorkModule = __decorate([
    (0, common_1.Module)({
        providers: [
            artwork_resolver_1.ArtWorkResolver,
            artwork_service_1.ArtWorkService,
            collection_service_1.CollectionService,
            prisma_service_1.PrismaService,
            config_1.ConfigService,
        ],
        exports: [artwork_service_1.ArtWorkService],
    })
], ArtWorkModule);
exports.ArtWorkModule = ArtWorkModule;
//# sourceMappingURL=artwork.module.js.map