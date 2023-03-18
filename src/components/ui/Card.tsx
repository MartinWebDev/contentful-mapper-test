import React from 'react';
import styles from './styles/Card.module.scss';

export interface ICard {
  heading: string;
  subheading: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({ heading, subheading, children }: ICard) => {
  return (
    <div className={styles.card}>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      {children}
    </div>
  );
};
