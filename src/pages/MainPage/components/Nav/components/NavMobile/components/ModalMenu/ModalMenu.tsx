import { BurgerClose } from "../../../../../../../../icons/BurgerClose";
import { Link } from "react-router-dom";
import { EmailIcon } from "../../../../../../../../icons/EmailIcon";
import { PhoneIcon } from "../../../../../../../../icons/PhoneIcon";
import ScrollLock from "react-scrolllock";

import s from "./ModalMenu.module.css";

interface Props {
  className?: string;
  onClose: () => void;
  isOpened: boolean;
}

export function ModalMenu({ onClose, isOpened }: Props) {
  const scrollToEmail = () => {
    onClose();
    window.scroll({
      top: 4880,
      behavior: "smooth",
    });
  };

  return (
    <ScrollLock isActive={isOpened}>
      <div className={isOpened ? s.root_fadeIn : s.root_fadeOut}>
        <BurgerClose onClose={onClose} className={s.burgerIconClose} />
        <ul className={s.listLinks}>
          <li>
            <Link className={s.link} to="">
              Главная
            </Link>
          </li>
          <li>
            <Link className={s.link} to="">
              Галерея
            </Link>
          </li>
          <li>
            <Link className={s.link} to="">
              Контакты
            </Link>
          </li>
          <li className={s.blockFeedback}>
            <button className={s.circle}>
              <EmailIcon onClose={scrollToEmail} />
            </button>
            <a className={s.circle} href="tel:+79001111111">
              <PhoneIcon />
            </a>
          </li>
        </ul>
      </div>
    </ScrollLock>
  );
}
