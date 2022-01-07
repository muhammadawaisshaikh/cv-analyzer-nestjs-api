import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateApplyJobsDto } from 'src/dto/apply-jobs/create-apply-jobs.dto';
import { UpdateApplyJobsDto } from 'src/dto/apply-jobs/update-apply-jobs.dto';
import { ApplyJobs, ApplyJobsDocument } from 'src/schema/apply-jobs.schema';

@Injectable()
export class ApplyJobsService {
    constructor(@InjectModel(ApplyJobs.name)
    private readonly model: Model<ApplyJobsDocument>) {
    }

    async findAll(): Promise<ApplyJobs[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<ApplyJobs> {
        return await this.model.findById(id).exec();
    }

    async create(createJobsDto: CreateApplyJobsDto): Promise<ApplyJobs> {
        return await new this.model({
            ...createJobsDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateJobsDto: UpdateApplyJobsDto): Promise<ApplyJobs> {
        return await this.model.findByIdAndUpdate(id, updateJobsDto).exec();
    }

    async delete(id: string): Promise<ApplyJobs> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}
