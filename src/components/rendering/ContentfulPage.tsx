import Head from 'next/head';
import React, { ReactNode } from 'react';
import { ICardFields, IEntry, IPage, IPageFields, ISeeMoreFields } from '../../../@types/generated/contentful';
import { Card, ICard } from '../ui/Card';
import { ISeeMore, SeeMore } from '../ui/SeeMore';

interface IContentfulPage {
  config: IPage;
}

interface IContentfulRenderer<TConfig, TProps> {
  componentName: string;
  mapConfigToProps: (config: TConfig) => TProps;
  renderComponent: (props: TProps, renderers: IContentfulRenderer<TConfig, TProps>[], key: string) => React.ReactNode;
}

const contentfulRenderers = [
  {
    componentName: "page",
    mapConfigToProps: (fields) => fields,
    renderComponent: (props, renderers) => (
      <>
        <Head>
          <title>{props.pageTitle}</title>
        </Head>
        {(props.children as IEntry[] || []).map(x => generateContent(x, renderers))}
      </>
    )
  } as IContentfulRenderer<IPageFields, { children: ReactNode | ReactNode[], pageTitle: string }>,
  {
    componentName: "card",
    mapConfigToProps: (fields) => fields,
    renderComponent: (props, renderers, key) => (
      <Card
        key={key}
        heading={props.heading}
        subheading={props.subheading}
      >
        {(props.children as IEntry[] || []).map(x => generateContent(x, renderers))}
      </Card>
    )
  } as IContentfulRenderer<ICardFields, ICard>,
  {
    componentName: "seeMore",
    mapConfigToProps: (fields) => fields,
    renderComponent: (props, renderers, key) => (
      <SeeMore title={props.title} key={key}>
        {(props.children as IEntry[] || []).map(x => generateContent(x, renderers))}
      </SeeMore>
    )
  } as IContentfulRenderer<ISeeMoreFields, ISeeMore>
];

const generateContent = (config: IEntry, renderers: IContentfulRenderer<any, any>[]) => {
  // console.group('=== Depth check ===');
  // console.log(config);
  // console.groupEnd();
  const contentType = config.sys.contentType.sys.id;
  const renderer = renderers.find(x => {
    return x.componentName === contentType;
  });

  if (!renderer) return;

  const { mapConfigToProps, renderComponent } = renderer;
  const props = mapConfigToProps(config.fields);
  const component = renderComponent(props, renderers, config.sys.id);
  return component;
};

export const ContentfulPage = ({ config }: IContentfulPage) => {
  return (
    <>
      {generateContent(config, contentfulRenderers)}
    </>
  );
};
