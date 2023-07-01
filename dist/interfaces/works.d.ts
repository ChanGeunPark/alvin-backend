export interface ArtWork {
    id: string;
    title: string;
    description?: string;
    image?: string;
    width?: number;
    height?: number;
    userId: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface Collection {
    id: string;
    title: string;
    artWorks: ArtWork[];
    userId: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface Like {
    id: string;
    userId: string;
    artworkId: string;
    updatedAt: Date;
    createdAt: Date;
}
