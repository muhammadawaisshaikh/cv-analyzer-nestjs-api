import { CreateCompaniesDto } from 'src/dto/companies/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/companies/update-companies.dto';
import { CompaniesService } from './companies.service';
export declare class CompaniesController {
    private readonly service;
    constructor(service: CompaniesService);
    index(): Promise<import("../../schema/companies.schema").Companies[]>;
    find(id: string): Promise<import("../../schema/companies.schema").Companies>;
    create(createProfessionalAboutDto: CreateCompaniesDto): Promise<import("../../schema/companies.schema").Companies>;
    update(id: string, updateProfessionalAboutDto: UpdateCompaniesDto): Promise<import("../../schema/companies.schema").Companies>;
    delete(id: string): Promise<import("../../schema/companies.schema").Companies>;
}
