import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coffee extends Document {
  @Prop({ index: true })
  name: string;

  @Prop()
  brand: string;

  @Prop([String])
  flavors: string[];
}

export const CoffeSchema = SchemaFactory.createForClass(Coffee);
