import { Model } from 'mongoose';
import { CreateJobsDto } from 'src/dto/jobs/create-jobs.dto';
import { UpdateJobsDto } from 'src/dto/jobs/update-jobs.dto';
import { Jobs, JobsDocument } from 'src/schema/jobs.schema';
export declare class JobsService {
    private readonly model;
    constructor(model: Model<JobsDocument>);
    findAll(): Promise<Jobs[]>;
    findOne(id: string): Promise<Jobs>;
    create(createJobsDto: CreateJobsDto): Promise<Jobs>;
    update(id: string, updateJobsDto: UpdateJobsDto): Promise<Jobs>;
    delete(id: string): Promise<Jobs>;
    findJobsByCompany(id: string): Promise<(Jobs & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
