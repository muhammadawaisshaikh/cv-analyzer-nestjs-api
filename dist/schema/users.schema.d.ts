import { Document } from 'mongoose';
export declare type UsersDocument = Users & Document;
export declare class Users {
    username: string;
    password: string;
    role: string;
}
export declare const UsersSchema: import("mongoose").Schema<Document<Users, any, any>, import("mongoose").Model<Document<Users, any, any>, any, any, any>, any>;
