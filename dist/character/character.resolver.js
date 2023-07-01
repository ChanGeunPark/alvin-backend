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
exports.CharacterResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const character_service_1 = require("./character.service");
const character_entity_1 = require("./entities/character.entity");
const create_character_input_1 = require("./dto/create-character.input");
const update_character_input_1 = require("./dto/update-character.input");
const create_user_input_1 = require("../user/dto/create-user.input");
let CharacterResolver = class CharacterResolver {
    constructor(characterService) {
        this.characterService = characterService;
    }
    createCharacter(createCharacterInput) {
        return this.characterService.create(createCharacterInput);
    }
    findAll() {
        return this.characterService.findAll();
    }
    findOne(id) {
        return this.characterService.findOne(id);
    }
    updateCharacter(updateCharacterInput) {
        return this.characterService.update(updateCharacterInput.id, updateCharacterInput);
    }
    removeCharacter(id) {
        return this.characterService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.CreateUserOutput),
    __param(0, (0, graphql_1.Args)('createCharacterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_input_1.CreateCharacterInput]),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "createCharacter", null);
__decorate([
    (0, graphql_1.Query)(() => [character_entity_1.Character], { name: 'characters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharacterResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => character_entity_1.Character, { name: 'character' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharacterResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => character_entity_1.Character),
    __param(0, (0, graphql_1.Args)('updateCharacterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_character_input_1.UpdateCharacterInput]),
    __metadata("design:returntype", void 0)
], CharacterResolver.prototype, "updateCharacter", null);
__decorate([
    (0, graphql_1.Mutation)(() => character_entity_1.Character),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharacterResolver.prototype, "removeCharacter", null);
CharacterResolver = __decorate([
    (0, graphql_1.Resolver)(() => character_entity_1.Character),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharacterResolver);
exports.CharacterResolver = CharacterResolver;
//# sourceMappingURL=character.resolver.js.map