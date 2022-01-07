import { Model } from 'mongoose';
import { CreateApplyJobsDto } from 'src/dto/apply-jobs/create-apply-jobs.dto';
import { UpdateApplyJobsDto } from 'src/dto/apply-jobs/update-apply-jobs.dto';
import { ApplyJobs, ApplyJobsDocument } from 'src/schema/apply-jobs.schema';
export declare class ApplyJobsService {
    private readonly model;
    constructor(model: Model<ApplyJobsDocument>);
    findAll(): Promise<ApplyJobs[]>;
    findOne(id: string): Promise<ApplyJobs>;
    create(createJobsDto: CreateApplyJobsDto): Promise<ApplyJobs>;
    update(id: string, updateJobsDto: UpdateApplyJobsDto): Promise<ApplyJobs>;
    delete(id: string): Promise<ApplyJobs>;
}
