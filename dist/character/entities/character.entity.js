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
exports.Character = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Character = class Character extends core_entity_1.CoreEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: '캐릭터 이름' }),
    __metadata("design:type", String)
], Character.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '세계관', nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "worldView", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '소개' }),
    __metadata("design:type", String)
], Character.prototype, "introduction", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '성격', nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "personality", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: '캐릭터 이미지', nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "characterImage", void 0);
Character = __decorate([
    (0, graphql_1.ObjectType)()
], Character);
exports.Character = Character;
//# sourceMappingURL=character.entity.js.map