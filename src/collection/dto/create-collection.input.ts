import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCollectionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
