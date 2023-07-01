import { CreateArtWorkInput } from './createArtWork.dto';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { ArtWork as ArtWorkType } from 'src/interfaces/works';
declare const UpdateArtWorkInput_base: import("@nestjs/common").Type<Partial<CreateArtWorkInput>>;
export declare class UpdateArtWorkInput extends UpdateArtWorkInput_base {
    id: string;
}
export declare class UpdateArtWorkOutput extends CoreOutput {
    artWork?: ArtWorkType;
}
export {};
