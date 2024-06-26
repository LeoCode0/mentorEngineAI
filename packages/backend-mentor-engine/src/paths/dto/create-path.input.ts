import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePathInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
