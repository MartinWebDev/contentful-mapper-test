// import { INavigation } from '@internal-types/';
import React from 'react';
import { INavigation } from '../../../@types/generated/contentful';
import { Icon } from '../ui/Icon';

interface IMainLayout {
  navigationConfig: INavigation;
  children: React.ReactNode;
}

export const MainLayout = ({ children, navigationConfig }: IMainLayout) => {
  const renderNavList = (nav: INavigation[]) => {
    return (
      <ul>
        {nav.map(x => {
          return (
            <li key={x.fields.url}>
              {x.fields.iconName && <Icon iconName={x.fields.iconName} />}
              {x.fields.displayName}
              {x.fields.subNavigation && renderNavList(x.fields.subNavigation)}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderNavRoot = (nav: INavigation) => {
    return (
      <ul>
        <li>
          {nav.fields.displayName}
          {nav.fields.subNavigation && renderNavList(nav.fields.subNavigation)}
        </li>
      </ul>
    )
  };

  return (
    <>
      <header>
        <h1>Welcome to the cool website!</h1>
        {renderNavRoot(navigationConfig)}
      </header>

      <main>
        {children}
      </main>
    </>
  );
};
