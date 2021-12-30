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
exports.JobsSchema = exports.Jobs = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Jobs = class Jobs {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Jobs.prototype, "remoteOrOnsite", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "jobType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Jobs.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Jobs.prototype, "requirements", void 0);
Jobs = __decorate([
    (0, mongoose_1.Schema)()
], Jobs);
exports.Jobs = Jobs;
exports.JobsSchema = mongoose_1.SchemaFactory.createForClass(Jobs);
//# sourceMappingURL=jobs.schema.js.map