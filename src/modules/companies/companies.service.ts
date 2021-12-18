import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCompaniesDto } from 'src/dto/companies/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/companies/update-companies.dto';
import { CompaniesDocument, Companies } from 'src/schema/companies.schema';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Companies.name) private readonly model: Model<CompaniesDocument>) {
    }

    async findAll(): Promise<Companies[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Companies> {
        return await this.model.findById(id).exec();
    }

    async create(createCompaniesDto: CreateCompaniesDto): Promise<Companies> {
        return await new this.model({
            ...createCompaniesDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateCompaniesDto: UpdateCompaniesDto): Promise<Companies> {
        return await this.model.findByIdAndUpdate(id, updateCompaniesDto).exec();
    }

    async delete(id: string): Promise<Companies> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
