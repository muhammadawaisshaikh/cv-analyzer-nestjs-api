import { Document } from 'mongoose';
export declare type ApplyJobsDocument = ApplyJobs & Document;
export declare class ApplyJobs {
    jobId: string;
    companyId: string;
    firstName: string;
    lastName: string;
    email: string;
    website: string;
    phone: string;
    resumeURL: string;
    cover: string;
}
export declare const ApplyJobsSchema: import("mongoose").Schema<Document<ApplyJobs, any, any>, import("mongoose").Model<Document<ApplyJobs, any, any>, any, any, any>, any>;
