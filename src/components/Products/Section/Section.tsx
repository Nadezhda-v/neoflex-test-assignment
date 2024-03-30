import React from 'react';

import { IProduct } from '../Products';
import styles from './Section.module.scss';
import Card from '../Card/Card';

export interface CategoryItem {
  title: string;
  items: IProduct[];
}

const Section = ({ title, items }: CategoryItem) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}</h4>

      <ul className={styles.cards}>
        {items.length &&
          items.map((item: IProduct) => {
            return <Card key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
};

export default Section;
