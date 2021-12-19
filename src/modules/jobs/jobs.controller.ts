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
import { CreateJobsDto } from 'src/dto/jobs/create-jobs.dto';
import { UpdateJobsDto } from 'src/dto/jobs/update-jobs.dto';
import { JobsService } from './jobs.service';



@Controller('jobs')
export class JobsController {
    constructor(private readonly service: JobsService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createProfessionalAboutDto: CreateJobsDto) {
        return await this.service.create(createProfessionalAboutDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateProfessionalAboutDto: UpdateJobsDto) {
        return await this.service.update(id, updateProfessionalAboutDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
