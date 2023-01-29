import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class ArtWork extends CoreEntity {
  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  description?: string;

  @Field((type) => String, { nullable: true })
  image?: string;

  @Field((type) => Int, { nullable: true })
  width?: number;

  @Field((type) => Int, { nullable: true })
  height?: number;

  @Field((type) => String)
  userId: string;
}
