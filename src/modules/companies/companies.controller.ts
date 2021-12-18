import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { CreateCompaniesDto } from 'src/dto/companies/create-companies.dto';
import { UpdateCompaniesDto } from 'src/dto/companies/update-companies.dto';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
    constructor(private readonly service: CompaniesService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createProfessionalAboutDto: CreateCompaniesDto) {
        return await this.service.create(createProfessionalAboutDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProfessionalAboutDto: UpdateCompaniesDto) {
        return await this.service.update(id, updateProfessionalAboutDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
