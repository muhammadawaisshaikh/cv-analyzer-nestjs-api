import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { Companies, CompaniesSchema } from 'src/schema/companies.schema';

@Module({
  providers: [CompaniesService],
  controllers: [CompaniesController],
  imports: [
    MongooseModule.forFeature([
      { name: Companies.name, schema: CompaniesSchema },
    ]),
  ],
})
export class CompaniesModule {}
