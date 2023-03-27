import { createClient } from 'contentful';
import { Entry } from 'contentful';
import { IPage, IPageFields } from '../../@types/generated/contentful';

export const getPage = async (pageId: string): Promise<Entry<IPageFields>> => {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY as string,
        host: 'preview.contentful.com',
        space: '5snoiaxo9zl5',
        environment: 'master',
    });

    const page = await client.getEntry<IPageFields>(pageId, {
        include: 10,
    });

    return page;
};

// const getRecursiveContent = () => {};
