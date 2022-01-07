import { BaseApplyJobs } from "./base-apply-jobs.dto";

export class UpdateApplyJobsDto extends BaseApplyJobs {
    completedAt: Date;
}