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
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.cards}>
        {items.length &&
          items.map((item: IProduct) => {
            return <Card key={item.id} {...item} />;
          })}
      </div>
    </section>
  );
};

export default Section;
