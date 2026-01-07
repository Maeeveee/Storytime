export interface Article {
    id: number;
    image: string;
    title: string;
    shortContent: string;
    authorName: string;
    authorAvatar: string;
    createdDate: string;
    category?: string;
}