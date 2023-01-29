export type UserRole = 'Client' | 'Owner' | 'Admin';
export interface User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
    verified?: boolean;
    profileImage?: string;
    bannerImage?: string;
    nickname?: string;
    bio?: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface Verification {
    id: string;
    code: string;
    userId: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface Follow {
    id: string;
    followerId: string;
    followingId: string;
    updatedAt: Date;
    createdAt: Date;
}
