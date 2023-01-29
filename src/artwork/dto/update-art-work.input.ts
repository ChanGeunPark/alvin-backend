import { CreateArtWorkInput } from './createArtWork.dto';
import { InputType, Field, PartialType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { ArtWork as ArtWorkType } from 'src/interfaces/works';
import { ArtWork } from '../entities/art-work.entity';

@InputType()
export class UpdateArtWorkInput extends PartialType(CreateArtWorkInput) {
  @Field(() => String)
  id: string;
}

@ObjectType()
export class UpdateArtWorkOutput extends CoreOutput {
  @Field(() => ArtWork, { nullable: true })
  artWork?: ArtWorkType;
}
