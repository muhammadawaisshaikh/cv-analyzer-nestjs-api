import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Jobs, JobsSchema } from 'src/schema/jobs.schema';

import { ApplyJobsService } from './apply-jobs.service';
import { ApplyJobsController } from './apply-jobs.controller';
import { ApplyJobs, ApplyJobsSchema } from 'src/schema/apply-jobs.schema';

@Module({
  providers: [JobsService, ApplyJobsService],
  controllers: [JobsController, ApplyJobsController],
  imports: [
    MongooseModule.forFeature([
      { name: Jobs.name, schema: JobsSchema },
      { name: ApplyJobs.name, schema: ApplyJobsSchema },
    ]),
  ]
})
export class JobsModule {}
