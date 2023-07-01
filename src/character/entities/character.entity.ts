import { ObjectType, Field } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';

@ObjectType()
export class Character extends CoreEntity {
  @Field(() => String, { description: '캐릭터 이름' })
  name: string;

  @Field(() => String, { description: '세계관', nullable: true })
  worldView?: string;

  @Field(() => String, { description: '소개' })
  introduction: string;

  @Field(() => String, { description: '성격', nullable: true })
  personality?: string;

  @Field(() => String, { description: '캐릭터 이미지', nullable: true })
  characterImage?: string;
}
