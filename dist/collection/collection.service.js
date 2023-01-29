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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let CollectionService = class CollectionService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    create(createCollectionInput) {
        return 'This action adds a new collection';
    }
    async findAll() {
        const collections = await this.prisma.collection.findMany();
        return collections;
    }
    findOne(id) {
        return `This action returns a #${id} collection`;
    }
    async userFromCollection(userId) {
        return await this.prisma.collection.findMany({
            where: {
                userId,
            },
        });
    }
    async artWorkFromCollection(artWorkId) {
        return await this.prisma.collection.findMany({
            where: {
                artworkId: artWorkId,
            },
        });
    }
    update(id, updateCollectionInput) {
        return `This action updates a #${id} collection`;
    }
    remove(id) {
        return `This action removes a #${id} collection`;
    }
};
CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map