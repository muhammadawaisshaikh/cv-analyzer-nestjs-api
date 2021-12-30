import { Model } from 'mongoose';
import { CreateCompaniesDto } from 'src/dto/companies/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/companies/update-companies.dto';
import { CompaniesDocument, Companies } from 'src/schema/companies.schema';
export declare class CompaniesService {
    private readonly model;
    constructor(model: Model<CompaniesDocument>);
    findAll(): Promise<Companies[]>;
    findOne(id: string): Promise<Companies>;
    create(createCompaniesDto: CreateCompaniesDto): Promise<Companies>;
    update(id: string, updateCompaniesDto: UpdateCompaniesDto): Promise<Companies>;
    delete(id: string): Promise<Companies>;
}
