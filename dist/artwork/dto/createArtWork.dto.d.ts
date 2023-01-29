import { CoreOutput } from 'src/common/dtos/output.dto';
import { ArtWork } from '../entities/art-work.entity';
declare const CreateArtWorkInput_base: import("@nestjs/common").Type<Pick<ArtWork, "userId" | "title" | "description" | "image" | "width" | "height">>;
export declare class CreateArtWorkInput extends CreateArtWorkInput_base {
}
export declare class CreateArtWorkOutput extends CoreOutput {
}
export {};
