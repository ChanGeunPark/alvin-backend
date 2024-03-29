import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserOutput, CreateUserInput } from './dto/create-user.input';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { UserProfileInput, UserProfileOutput } from './dto/user-profile.dto';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.dto';
import { VerifyEmailInput, VerifyEmailOutput } from './dto/verify-email.dto';
import { CollectionService } from 'src/collection/collection.service';
export declare class UserResolver {
    private readonly userService;
    private readonly collectionService;
    constructor(userService: UserService, collectionService: CollectionService);
    createUser(createUserInput: CreateUserInput): Promise<CreateUserOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    me(authUser: User): User;
    userProfile(userProfileInput: UserProfileInput): Promise<UserProfileOutput>;
    editProfile(authUser: User, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    removeUser(id: string): string;
    collections(user: User): Promise<import(".prisma/client").Collection[]>;
    verifyEmail(verifyEmailInput: VerifyEmailInput): Promise<VerifyEmailOutput>;
}
