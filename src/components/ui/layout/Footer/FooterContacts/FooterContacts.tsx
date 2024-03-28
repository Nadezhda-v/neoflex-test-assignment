import styles from '../Footer.module.scss';
import FooterSocials from './FooterSocials';

const FooterContacts = () => {
  return (
    <div className={styles.contactsBlock}>
      <div className={styles.contactInform}>
        <FooterSocials />
      </div>
    </div>
  );
};

export default FooterContacts;
