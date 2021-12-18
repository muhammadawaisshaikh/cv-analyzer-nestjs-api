import { BaseCompanies } from "./base-companies.dto";

export class UpdateCompaniesDto extends BaseCompanies {
    completedAt: Date;
}