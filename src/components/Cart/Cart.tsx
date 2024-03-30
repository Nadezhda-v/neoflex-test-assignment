import React from 'react';
import cn from 'classnames';

import styles from './Cart.module.scss';
import { ActionButton } from '../ui/ActionButton/ActionButton';
import { getSum } from '../../utils/getSum';
import CardItem from './CardItem/CardItem';
import { useAppSelector } from '../../hooks/hook';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <section className={styles.cart}>
      <h4 className={styles.title}>Корзина</h4>

      {!cart.length ? (
        <p className={styles.empty}>Корзина пуста</p>
      ) : (
        <div className={styles.content}>
          <ul className={styles.list}>
            {cart.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </ul>
          <div className={styles.actions}>
            <div className={styles.orderAmount}>
              <div className={styles.total}>
                Итого:{' '}
                <span className={cn(styles.total, styles.totalPrice)}>
                  ₽{' '}
                  {getSum(
                    cart.map((item) => item.price * (item.quantity ?? 1)),
                  )}
                </span>
              </div>

              <ActionButton
                className={styles.checkoutButton}
                text='Перейти к оформлению'
                type='button'
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
