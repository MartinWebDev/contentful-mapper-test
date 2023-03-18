import { ContentfulPage } from '@contentful-types/components/rendering/ContentfulPage';
import Head from 'next/head';
import React from 'react';
import * as contentful from '../api/contentful';

const Generated = (props: any) => {
  console.log("props", props);
  return (
    <>
      <Head>
        <title>Generated from Contentful!</title>
      </Head>

      <ContentfulPage config={props.pageData} />
    </>
  );
};

export const getServerSideProps = async () => {
  const page = await contentful.getPage('amLJfpYi1pIvnV0Nkjrzn');
  return {
    props: {
      pageData: page
    }
  };
};

export default Generated;
