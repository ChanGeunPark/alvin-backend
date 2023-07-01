import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
export class Category extends CoreEntity {
  @Field(() => String)
  name: string;

  @Field(() => String)
  coverImage: string;

  @Field(() => [Restaurant])
  restaurants: Restaurant[];
}
