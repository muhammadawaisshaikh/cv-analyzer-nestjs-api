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
exports.ApplyJobsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const create_apply_jobs_dto_1 = require("../../dto/apply-jobs/create-apply-jobs.dto");
const update_apply_jobs_dto_1 = require("../../dto/apply-jobs/update-apply-jobs.dto");
const apply_jobs_schema_1 = require("../../schema/apply-jobs.schema");
let ApplyJobsService = class ApplyJobsService {
    constructor(model) {
        this.model = model;
    }
    async findAll() {
        return await this.model.find().exec();
    }
    async findOne(id) {
        return await this.model.findById(id).exec();
    }
    async create(createJobsDto) {
        return await new this.model(Object.assign(Object.assign({}, createJobsDto), { createdAt: new Date() })).save();
    }
    async update(id, updateJobsDto) {
        return await this.model.findByIdAndUpdate(id, updateJobsDto).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
};
ApplyJobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(apply_jobs_schema_1.ApplyJobs.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ApplyJobsService);
exports.ApplyJobsService = ApplyJobsService;
//# sourceMappingURL=apply-jobs.service.js.map