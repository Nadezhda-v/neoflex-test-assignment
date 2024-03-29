import React from 'react';

import styles from './CardItem.module.scss';
import { IProduct } from '../../Products/Products';
import MinusIcon from '../../icons/MinusIcon';
import PlusIcon from '../../icons/PlusIcon';
import DelIcon from '../../icons/DelIcon';
import { useAppDispatch } from '../../../hooks/hook';
import { cartSlice } from '../../../store/cart/cartSlice';

const CardItem = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();
  const { img, title, price, quantity } = item;

  const delItem = (id: number) => {
    dispatch(cartSlice.actions.deleteItem(id));
  };

  const changeQuantity = (id: number, quantity: number) => {
    if (quantity) {
      dispatch(cartSlice.actions.updateQuantity({ id, quantity }));
    } else {
      delItem(id);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.deleteButton} onClick={() => delItem(item.id)}>
        <DelIcon />
      </div>

      <div className={styles.content}>
        <div className={styles.image}>
          <img src={img} alt={title} />
        </div>

        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.price}>{price} ₽</span>
        </div>
      </div>

      <div className={styles.boxQuantity}>
        <div className={styles.quantity}>
          <div
            className={styles.icon}
            onClick={() => changeQuantity(item.id, (quantity ?? 1) - 1)}
          >
            <MinusIcon />
          </div>

          <span>{quantity}</span>

          <div
            className={styles.icon}
            onClick={() => changeQuantity(item.id, (quantity ?? 1) + 1)}
          >
            <PlusIcon />
          </div>
        </div>

        <span className={styles.total}>{price * (quantity ?? 1)} ₽</span>
      </div>
    </li>
  );
};

export default CardItem;
