import { MainLayout } from '@contentful-types/components/layout/MainLayout';
import '@contentful-types/styles/globals.css';
import { Entry } from 'contentful';
import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { INavigation } from '../../@types/generated/contentful';
import * as contentful from '../api/contentful';

type MyAppAdditionalProps = {
  navigationConfig?: INavigation;
};

type MyAppProps = AppProps & MyAppAdditionalProps;
type MyAppInitialProps = AppInitialProps & MyAppAdditionalProps

const placeholderNav: INavigation = {
  sys: { contentType: { sys: { id: 'navigation', linkType: 'ContentType', type: 'Link' } }, createdAt: '', id: '', locale: '', type: '', updatedAt: '' },
  metadata: { tags: [] },
  fields: {
    displayName: 'Root',
    url: '/',
    subNavigation: [
      {
        sys: { contentType: { sys: { id: 'navigation', linkType: 'ContentType', type: 'Link' } }, createdAt: '', id: '', locale: '', type: '', updatedAt: '' },
        metadata: { tags: [] },
        fields: {
          displayName: 'Test',
          url: '/clickme',
          iconName: 'bin'
        },
        toPlainObject: () => ({}),
        update: () => new Promise(r => r)
      }
    ],
  },
  toPlainObject: () => ({}),
  update: () => new Promise(r => r)
};

function MyApp({ Component, pageProps, navigationConfig }: MyAppProps) {
  console.log('App (Layout) -> pageProps', pageProps);
  console.log('App (Layout) -> navigationConfig',);
  return (
    <MainLayout navigationConfig={navigationConfig as INavigation}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

MyApp.getInitialProps = async (context: AppContext): Promise<MyAppInitialProps> => {
  const initialProps = await App.getInitialProps(context);

  const page = await contentful.getPage('amLJfpYi1pIvnV0Nkjrzn');

  console.log('App.getInitialProps', initialProps);

  return {
    ...initialProps,
    navigationConfig: page.fields.navigation,
  };
};

export default MyApp;
