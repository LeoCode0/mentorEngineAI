import { CreatePathInput } from './create-path.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePathInput extends PartialType(CreatePathInput) {
  @Field(() => Int)
  id: number;
}
