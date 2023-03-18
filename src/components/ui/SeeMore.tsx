import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles/SeeMore.module.scss';

export interface ISeeMore {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const SeeMore = ({ title, children }: ISeeMore) => {
  const [expanded, setExpanded] = useState(false);

  const handleClickExpand = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className={styles.seemore}>
      <div className={classNames(styles.title, { [styles.open]: expanded })}>
        <a href="#" onClick={handleClickExpand}>{title}</a>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
};
