import { createClient } from 'contentful';

export const getPage = async (pageId: string) => {
    const client = createClient({
        accessToken: process.env.CONTENTFUL_API_KEY as string,
        host: 'preview.contentful.com',
        space: '5snoiaxo9zl5',
        environment: 'master',
    });

    const page = await client.getEntry(pageId, {
        include: 10,
    });
    return page;
};
