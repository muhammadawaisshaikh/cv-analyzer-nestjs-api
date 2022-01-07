import { CreateApplyJobsDto } from 'src/dto/apply-jobs/create-apply-jobs.dto';
import { UpdateApplyJobsDto } from 'src/dto/apply-jobs/update-apply-jobs.dto';
import { ApplyJobsService } from './apply-jobs.service';
export declare class ApplyJobsController {
    private readonly service;
    constructor(service: ApplyJobsService);
    index(): Promise<import("../../schema/apply-jobs.schema").ApplyJobs[]>;
    find(id: string): Promise<import("../../schema/apply-jobs.schema").ApplyJobs>;
    create(createApplyJobsDto: CreateApplyJobsDto): Promise<import("../../schema/apply-jobs.schema").ApplyJobs>;
    update(id: string, updateApplyJobsDto: UpdateApplyJobsDto): Promise<import("../../schema/apply-jobs.schema").ApplyJobs>;
    delete(id: string): Promise<import("../../schema/apply-jobs.schema").ApplyJobs>;
}
