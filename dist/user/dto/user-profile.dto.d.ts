import { CoreOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
export declare class UserProfileInput {
    userId: string;
}
export declare class UserProfileOutput extends CoreOutput {
    user?: User;
}
