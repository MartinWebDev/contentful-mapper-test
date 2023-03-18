import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from '../../api/contentful';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const page = await contentful.getPage('amLJfpYi1pIvnV0Nkjrzn');
    res.status(200).json(page);
}
