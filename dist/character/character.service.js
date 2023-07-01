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
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CharacterService = class CharacterService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name, introduction, personality, worldView, characterImage, }) {
        try {
            await this.prisma.aiCharacter.create({
                data: {
                    name,
                    introduction,
                    personality,
                    worldView,
                    characterImage,
                },
            });
            return { ok: true };
        }
        catch (e) {
            return { ok: true, error: e };
        }
    }
    findAll() {
        return this.prisma.aiCharacter.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} character`;
    }
    update(id, updateCharacterInput) {
        return `This action updates a #${id} character`;
    }
    remove(id) {
        return `This action removes a #${id} character`;
    }
};
CharacterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map