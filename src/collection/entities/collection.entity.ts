import { ObjectType, Field, Int } from '@nestjs/graphql';

import { ArtWork } from 'src/artwork/entities/art-work.entity';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Collection extends CoreEntity {
  @Field(() => String)
  title: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  workId: string;
}
