import { FC } from 'react';
import cn from 'classnames';

import styles from './Footer.module.scss';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterContacts from './FooterContacts/FooterContacts';
import { PROJECT_INFORM } from '../../../../utils/constans';

const Footer: FC = () => {
  return (
    <footer className={cn(styles.footer, 'container')}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img
            src={`/${PROJECT_INFORM.logo}`}
            alt={`${PROJECT_INFORM.name}`}
            className={styles.logo}
          />
        </div>
        <div className={styles.contentContainer}>
          <FooterMenu />
          <FooterContacts />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
