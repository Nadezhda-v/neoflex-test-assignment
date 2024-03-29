import React from 'react';

import { IProduct } from '../Products';
import styles from './Card.module.scss';
import RateIcon from '../../icons/RateIcon';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { useAppDispatch } from '../../../hooks/hook';
import { cartSlice } from '../../../store/cart/cartSlice';

const Card = ({ item }: { item: IProduct }) => {
  const { img, title, price, oldPrice, rate } = item;
  const dispatch = useAppDispatch();

  const addItem = (item: IProduct) => {
    dispatch(cartSlice.actions.addItemToCart(item));
  };

  return (
    <li className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>

      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.boxPrices}>
          <span className={styles.price}>{price}₽</span>
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
          onClick={() => addItem(item)}
        />
      </div>
    </li>
  );
};

export default Card;
