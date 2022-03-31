import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { CreateUsersDto } from 'src/dto/users/create-users.dto';
import { UpdateUsersDto } from 'src/dto/users/update-users.dto';
import { Users, UsersDocument } from 'src/schema/users.schema';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    saltOrRounds: number = 10;

    constructor(
        @InjectModel(Users.name) 
        private readonly model: Model<UsersDocument>
    ) { }

    async findAll(): Promise<Users[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Users> {
        return await this.model.findById(id).exec();
    }

    async create(createUsersDto: CreateUsersDto): Promise<any> {
        const users = await this.model.find().exec();
        const user = users.find(user => user.username === createUsersDto.username);
        const hashedPass = await bcrypt.hash(createUsersDto.password, this.saltOrRounds);

        if (!user) {
            let request = await new this.model({
                username: createUsersDto.username,
                password: hashedPass,
                role: createUsersDto.role,
                createdAt: new Date(),
            }).save();

            if (request) {
                const data = { username: request.username, role: request.role, createdAt: new Date() }
                return data;
                // return "User created successfully."
            } 
        }
        return null;
    }

    async update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
        return await this.model.findByIdAndUpdate(id, updateUsersDto).exec();
    }

    async delete(id: string): Promise<Users> {
        return await this.model.findByIdAndDelete(id).exec();
    }

    // Get user by email 
    async getUserByEmail(email: string) {
        let jobs = await this.model.find().exec();
        let filteredByEmail = jobs.find(j => j.username == email);

        return filteredByEmail;
    }
}