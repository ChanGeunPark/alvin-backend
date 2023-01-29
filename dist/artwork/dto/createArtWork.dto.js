"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArtWorkOutput = exports.CreateArtWorkInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const art_work_entity_1 = require("../entities/art-work.entity");
let CreateArtWorkInput = class CreateArtWorkInput extends (0, graphql_1.PickType)(art_work_entity_1.ArtWork, ['image', 'title', 'description', 'height', 'width', 'userId'], graphql_1.InputType) {
};
CreateArtWorkInput = __decorate([
    (0, graphql_1.InputType)()
], CreateArtWorkInput);
exports.CreateArtWorkInput = CreateArtWorkInput;
let CreateArtWorkOutput = class CreateArtWorkOutput extends output_dto_1.CoreOutput {
};
CreateArtWorkOutput = __decorate([
    (0, graphql_1.ObjectType)()
], CreateArtWorkOutput);
exports.CreateArtWorkOutput = CreateArtWorkOutput;
//# sourceMappingURL=createArtWork.dto.js.map