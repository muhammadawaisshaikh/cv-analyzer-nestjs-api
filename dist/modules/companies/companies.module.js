"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const companies_service_1 = require("./companies.service");
const companies_controller_1 = require("./companies.controller");
const companies_schema_1 = require("../../schema/companies.schema");
let CompaniesModule = class CompaniesModule {
};
CompaniesModule = __decorate([
    (0, common_1.Module)({
        providers: [companies_service_1.CompaniesService],
        controllers: [companies_controller_1.CompaniesController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: companies_schema_1.Companies.name, schema: companies_schema_1.CompaniesSchema },
            ]),
        ],
    })
], CompaniesModule);
exports.CompaniesModule = CompaniesModule;
//# sourceMappingURL=companies.module.js.map