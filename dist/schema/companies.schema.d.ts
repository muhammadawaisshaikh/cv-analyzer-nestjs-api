import { Document } from 'mongoose';
export declare type CompaniesDocument = Companies & Document;
export declare class Companies {
    companyName: string;
    ownerName: string;
    email: string;
    website: string;
    address: string;
    phone: string;
    city: string;
}
export declare const CompaniesSchema: import("mongoose").Schema<Document<Companies, any, any>, import("mongoose").Model<Document<Companies, any, any>, any, any, any>, any>;
