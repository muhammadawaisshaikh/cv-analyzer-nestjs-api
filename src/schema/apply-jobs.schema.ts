import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApplyJobsDocument = ApplyJobs & Document;

@Schema()
export class ApplyJobs {

  @Prop({ required: true })
  jobId: string;

  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  firstName: string;
  
  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  website: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  resumeURL: string;

  @Prop({ required: false })
  cover: string;
}

export const ApplyJobsSchema = SchemaFactory.createForClass(ApplyJobs);