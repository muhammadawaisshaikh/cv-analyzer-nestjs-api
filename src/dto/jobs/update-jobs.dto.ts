import { BaseJobs } from "./base-jobs.dto";

export class UpdateJobsDto extends BaseJobs {
    completedAt: Date;
}