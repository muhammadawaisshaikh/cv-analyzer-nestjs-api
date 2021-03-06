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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const create_users_dto_1 = require("../../dto/users/create-users.dto");
const update_users_dto_1 = require("../../dto/users/update-users.dto");
const users_schema_1 = require("../../schema/users.schema");
let UsersService = class UsersService {
    constructor(model) {
        this.model = model;
        this.saltOrRounds = 10;
    }
    async findAll() {
        return await this.model.find().exec();
    }
    async findOne(id) {
        return await this.model.findById(id).exec();
    }
    async create(createUsersDto) {
        const users = await this.model.find().exec();
        const user = users.find(user => user.username === createUsersDto.username);
        const hashedPass = await bcrypt.hash(createUsersDto.password, this.saltOrRounds);
        if (!user) {
            let request = await new this.model({
                username: createUsersDto.username,
                password: hashedPass,
                role: createUsersDto.role,
                createdAt: new Date(),
            }).save();
            if (request) {
                const data = { username: request.username, role: request.role, createdAt: new Date() };
                return data;
            }
        }
        return null;
    }
    async update(id, updateUsersDto) {
        return await this.model.findByIdAndUpdate(id, updateUsersDto).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
    async getUserByEmail(email) {
        let jobs = await this.model.find().exec();
        let filteredByEmail = jobs.find(j => j.username == email);
        return filteredByEmail;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map