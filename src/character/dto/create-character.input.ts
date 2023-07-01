import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType()
export class CreateCharacterInput {
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

@ObjectType()
export class CreateCharacterOutput extends CoreOutput {}
