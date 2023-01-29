import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { ArtWork } from '../entities/art-work.entity';

@InputType()
export class CreateArtWorkInput extends PickType(
  ArtWork,
  ['image', 'title', 'description', 'height', 'width', 'userId'] as const,
  InputType,
) {}

@ObjectType()
export class CreateArtWorkOutput extends CoreOutput {}
