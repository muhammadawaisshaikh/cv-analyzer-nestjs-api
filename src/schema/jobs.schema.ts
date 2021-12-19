import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobsDocument = Jobs & Document;

@Schema()
export class Jobs {
  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: false })
  remoteOrOnsite: string;

  @Prop({ required: true })
  jobType: string;

  @Prop({ required: true })
  skills: string;

  @Prop({ required: false })
  requirements: string;
}

export const JobsSchema = SchemaFactory.createForClass(Jobs);