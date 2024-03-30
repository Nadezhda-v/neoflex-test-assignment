import styles from '../Footer.module.scss';
import { PROJECT_INFORM } from '../../../../../utils/constans';
import WhatsappIcon from '../../../../icons/WhatsappIcon';
import TelegramIcon from '../../../../icons/TelegramIcon';
import VKIcon from '../../../../icons/VKIcon';

const FooterSocials = () => {
  return (
    <div className={styles.socials}>
      <a href={`${PROJECT_INFORM.VK_LINK}`} target='_blank' rel='noreferrer'>
        <VKIcon />
      </a>
      <a
        href={`${PROJECT_INFORM.TELEGRAM_LINK}`}
        target='_blank'
        rel='noreferrer'
      >
        <TelegramIcon />
      </a>
      <a
        href={`${PROJECT_INFORM.WHATSAPP_LINK}`}
        target='_blank'
        rel='noreferrer'
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

export default FooterSocials;
