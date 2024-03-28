import { Link } from 'react-router-dom';

import styles from '../Footer.module.scss';

export interface IMenuItem {
  name: string;
  key: string;
  path: string;
}

type FooterMenuColumnProps = {
  menuItems: IMenuItem[];
};

const FooterMenuColumn = ({ menuItems }: FooterMenuColumnProps) => {
  return (
    <div className={styles.footerNav}>
      {menuItems.map(({ name, key, path }) => {
        return (
          <Link key={key} to={path} className={styles.footerNavLink}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterMenuColumn;
