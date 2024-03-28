import React from 'react';

import { IProduct } from '../Products';
import styles from './Card.module.scss';
import RateIcon from '../../icons/RateIcon';
import { ActionButton } from '../../ui/ActionButton/ActionButton';

const Card = ({ img, title, price, oldPrice, rate }: IProduct) => {
  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>

      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.boxPrices}>
          <span className={styles.price}>{`${price} ₽`}</span>
          {oldPrice && (
            <span className={styles.oldPrice}>{`${oldPrice} ₽`}</span>
          )}
        </div>

        <div className={styles.rating}>
          <RateIcon />
          <span className={styles.rate}>{rate}</span>
        </div>

        <ActionButton
          className={styles.buyButton}
          text='Купить'
          type='button'
        />
      </div>
    </li>
  );
};

export default Card;
