import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Jobs, JobsSchema } from 'src/schema/jobs.schema';

@Module({
  providers: [JobsService],
  controllers: [JobsController],
  imports: [
    MongooseModule.forFeature([
      { name: Jobs.name, schema: JobsSchema },
    ]),
  ]
})
export class JobsModule {}
