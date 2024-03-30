import Paths from '../../../../../utils/paths';
import styles from '../Footer.module.scss';
import FooterMenuColumn, { IMenuItem } from './FooterMenuColumn';

const MenuItems: IMenuItem[] = [
  {
    name: 'Избранное',
    key: Paths.FAVOURITES,
    path: Paths.FAVOURITES,
  },
  {
    name: 'Корзина',
    key: Paths.CART,
    path: Paths.CART,
  },
  {
    name: 'Контакты',
    key: '/',
    path: '/',
  },
];

const FooterMenu = () => {
  return (
    <div className={styles.menuContent}>
      <FooterMenuColumn menuItems={MenuItems} />
    </div>
  );
};

export default FooterMenu;
