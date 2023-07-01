import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  InputType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

export enum UserRole {
  Client = 'Client',
  Owner = 'Owner',
  Admin = 'Admin',
}

registerEnumType(UserRole, { name: 'UserRole' });

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  // extends CoreEntity(통일된 값들)를 상속받는다.
  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;

  @Field((type) => Boolean)
  verified?: boolean;

  @Field((type) => String, { nullable: true })
  profileImage?: string;

  @Field((type) => String, { nullable: true })
  bannerImage?: string;

  @Field((type) => String, { nullable: true })
  nickname?: string;

  @Field((type) => String, { nullable: true })
  bio?: string;

  @Field((type) => UserRole)
  role: 'Client' | 'Owner' | 'Admin';

  // // TODO : delete restaurant
  @Field(() => [Restaurant], { nullable: true })
  restaurants?: Restaurant[];
}
