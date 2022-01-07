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
import { CreateApplyJobsDto } from 'src/dto/apply-jobs/create-apply-jobs.dto';
import { UpdateApplyJobsDto } from 'src/dto/apply-jobs/update-apply-jobs.dto';
import { ApplyJobsService } from './apply-jobs.service';



@Controller('apply-jobs')
export class ApplyJobsController {
    constructor(private readonly service: ApplyJobsService) { }

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createApplyJobsDto: CreateApplyJobsDto) {
        return await this.service.create(createApplyJobsDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateApplyJobsDto: UpdateApplyJobsDto) {
        return await this.service.update(id, updateApplyJobsDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
