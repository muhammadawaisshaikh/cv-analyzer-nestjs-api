import { Document } from 'mongoose';
export declare type JobsDocument = Jobs & Document;
export declare class Jobs {
    companyId: string;
    email: string;
    position: string;
    remoteOrOnsite: string;
    jobType: string;
    skills: string;
    requirements: string;
}
export declare const JobsSchema: import("mongoose").Schema<Document<Jobs, any, any>, import("mongoose").Model<Document<Jobs, any, any>, any, any, any>, any>;
