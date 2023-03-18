import { Asset } from 'contentful';

interface IAuthor {
    name: string;
    profilePicture: Asset;
}

interface IBlogPost {
    title: string;
    slug: string;
    date: string;
    bannerImage: Asset;
    author: IAuthor;
    captivator?: string | undefined;
    content: Document;
    contentSections: (IBlogPostSectionTextOnly | IBlogPostSectionWithImage)[];
}

interface IBlogPostSectionTextOnly {
    sectionTitle: string;
    content: Document;
}

interface IBlogPostSectionWithImage {
    sectionTitle: string;
    image: Asset;
    imagePosition: boolean;
    content: Document;
}
