import { CreateUsersDto } from 'src/dto/users/create-users.dto';
import { UpdateUsersDto } from 'src/dto/users/update-users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    index(): Promise<import("../../schema/users.schema").Users[]>;
    find(id: string): Promise<import("../../schema/users.schema").Users>;
    create(createUsersDto: CreateUsersDto): Promise<any>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<import("../../schema/users.schema").Users>;
    delete(id: string): Promise<import("../../schema/users.schema").Users>;
}
