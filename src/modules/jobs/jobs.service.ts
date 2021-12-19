import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateJobsDto } from 'src/dto/jobs/create-jobs.dto';
import { UpdateJobsDto } from 'src/dto/jobs/update-jobs.dto';
import { Jobs, JobsDocument } from 'src/schema/jobs.schema';

@Injectable()
export class JobsService {
    constructor(@InjectModel(Jobs.name) private readonly model: Model<JobsDocument>) {
    }

    async findAll(): Promise<Jobs[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Jobs> {
        return await this.model.findById(id).exec();
    }

    async create(createJobsDto: CreateJobsDto): Promise<Jobs> {
        return await new this.model({
            ...createJobsDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateJobsDto: UpdateJobsDto): Promise<Jobs> {
        return await this.model.findByIdAndUpdate(id, updateJobsDto).exec();
    }

    async delete(id: string): Promise<Jobs> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
