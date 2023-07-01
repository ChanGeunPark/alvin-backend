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
exports.ArtWorkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ArtWorkService = class ArtWorkService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createArtWork(user, createArtWorkInput) {
        try {
            await this.prisma.artWork.create({
                data: {
                    image: createArtWorkInput.image,
                    title: createArtWorkInput.title,
                    description: createArtWorkInput.description,
                    height: createArtWorkInput.height,
                    width: createArtWorkInput.width,
                    userId: user.id,
                },
            });
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async artWorks() {
        return await this.prisma.artWork.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} artWork`;
    }
    async updateArtWork(user, updateArtWorkInput) {
        try {
            const currentArtWork = await this.prisma.artWork.findUnique({
                where: {
                    id: updateArtWorkInput.id,
                },
            });
            if (currentArtWork.userId !== user.id)
                throw new Error('Not authorized.');
            const artWork = await this.prisma.artWork.update({
                where: {
                    id: updateArtWorkInput.id,
                },
                data: {
                    image: updateArtWorkInput.image,
                    title: updateArtWorkInput.title,
                    description: updateArtWorkInput.description,
                    height: updateArtWorkInput.height,
                    width: updateArtWorkInput.width,
                },
            });
            return { ok: true, artWork };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async removeArtWork(user, id) {
        try {
            const artWork = await this.prisma.artWork.findUnique({
                where: {
                    id: id,
                },
            });
            if (artWork.userId !== user.id)
                throw new Error('Not authorized.');
            await this.prisma.artWork.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    findAllByCollectionId(collectionId) {
        return `This action returns all artWork by collectionId #${collectionId}`;
    }
};
ArtWorkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArtWorkService);
exports.ArtWorkService = ArtWorkService;
//# sourceMappingURL=artwork.service.js.map