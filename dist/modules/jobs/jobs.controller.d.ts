import { CreateJobsDto } from 'src/dto/jobs/create-jobs.dto';
import { UpdateJobsDto } from 'src/dto/jobs/update-jobs.dto';
import { JobsService } from './jobs.service';
export declare class JobsController {
    private readonly service;
    constructor(service: JobsService);
    index(): Promise<import("../../schema/jobs.schema").Jobs[]>;
    find(id: string): Promise<import("../../schema/jobs.schema").Jobs>;
    create(createProfessionalAboutDto: CreateJobsDto): Promise<import("../../schema/jobs.schema").Jobs>;
    update(id: string, updateProfessionalAboutDto: UpdateJobsDto): Promise<import("../../schema/jobs.schema").Jobs>;
    delete(id: string): Promise<import("../../schema/jobs.schema").Jobs>;
}
