import React from 'react';

import { IProduct } from '../Products';
import styles from './Card.module.scss';

const Card = ({ img, title, price, oldPrice, rate }: IProduct) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
