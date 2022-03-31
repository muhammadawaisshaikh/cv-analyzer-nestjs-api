import { Model } from 'mongoose';
import { CreateUsersDto } from 'src/dto/users/create-users.dto';
import { UpdateUsersDto } from 'src/dto/users/update-users.dto';
import { Users, UsersDocument } from 'src/schema/users.schema';
export declare type User = any;
export declare class UsersService {
    private readonly model;
    saltOrRounds: number;
    constructor(model: Model<UsersDocument>);
    findAll(): Promise<Users[]>;
    findOne(id: string): Promise<Users>;
    create(createUsersDto: CreateUsersDto): Promise<any>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users>;
    delete(id: string): Promise<Users>;
    getUserByEmail(email: string): Promise<Users & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
