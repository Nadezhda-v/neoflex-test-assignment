import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Header.module.scss';
import { PROJECT_INFORM } from '../../../../utils/constans';
import Paths from '../../../../utils/paths';
import FavouritesIcon from '../../../icons/FavouritesIcon';
import CartIcon from '../../../icons/CartIcon';
import { useAppSelector } from '../../../../hooks/hook';
import { getSum } from '../../../../utils/getSum';

const Header: FC = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <header className={styles.header}>
      <div className={cn(styles.headerСontainer, 'container')}>
        <div className={styles.logo}>
          <Link to='/'>
            <img
              src={`/${PROJECT_INFORM.logo}`}
              alt={`${PROJECT_INFORM.name}`}
            />
          </Link>
        </div>

        <div className={styles.account}>
          <Link to={Paths.FAVOURITES}>
            <div className={styles.icon}>
              <FavouritesIcon />
            </div>
          </Link>

          <Link to={Paths.CART}>
            <div className={styles.icon}>
              <CartIcon />
            </div>

            {!!cart.length && (
              <span className={styles.count}>
                {getSum(cart.map((item) => item.quantity ?? 0))}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
