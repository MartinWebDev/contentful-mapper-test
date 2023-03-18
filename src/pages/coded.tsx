import Head from 'next/head';
import React from 'react';
import { Card } from '../components/ui/Card';
import { SeeMore } from '../components/ui/SeeMore';

const Coded = () => {
  return (
    <>
      <Head>
        <title>Generated from Contentful!</title>
      </Head>

      <Card subheading='Here is some more content' heading='Some Heading'>
        <SeeMore title='Click here to see more info'>
          <p>This is a paragraph!</p>
          <Card heading='Another card' subheading='with some more content'>
            <div>Some more content</div>
          </Card>
        </SeeMore>
      </Card>
    </>
  );
};

export default Coded;
