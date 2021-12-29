import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompaniesDocument = Companies & Document;

@Schema()
export class Companies {

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: false })
  ownerName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  website: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: false })
  city: string;
}

export const CompaniesSchema = SchemaFactory.createForClass(Companies);