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
exports.UpdateArtWorkOutput = exports.UpdateArtWorkInput = void 0;
const createArtWork_dto_1 = require("./createArtWork.dto");
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const art_work_entity_1 = require("../entities/art-work.entity");
let UpdateArtWorkInput = class UpdateArtWorkInput extends (0, graphql_1.PartialType)(createArtWork_dto_1.CreateArtWorkInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdateArtWorkInput.prototype, "id", void 0);
UpdateArtWorkInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateArtWorkInput);
exports.UpdateArtWorkInput = UpdateArtWorkInput;
let UpdateArtWorkOutput = class UpdateArtWorkOutput extends output_dto_1.CoreOutput {
};
__decorate([
    (0, graphql_1.Field)(() => art_work_entity_1.ArtWork, { nullable: true }),
    __metadata("design:type", Object)
], UpdateArtWorkOutput.prototype, "artWork", void 0);
UpdateArtWorkOutput = __decorate([
    (0, graphql_1.ObjectType)()
], UpdateArtWorkOutput);
exports.UpdateArtWorkOutput = UpdateArtWorkOutput;
//# sourceMappingURL=update-art-work.input.js.map