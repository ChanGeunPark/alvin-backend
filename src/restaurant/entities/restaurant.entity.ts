import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Category } from 'src/common/entities/category.entitiy';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/user/entities/user.entity';

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
export class Restaurant extends CoreEntity {
  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  coverImage: string;

  @Field(() => Category, { nullable: true })
  category: Category;

  @Field(() => User, { nullable: true })
  owner: User;
}
