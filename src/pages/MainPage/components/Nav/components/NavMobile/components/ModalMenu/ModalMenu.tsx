import { BurgerClose } from "../../../../../../../../icons/BurgerClose";
import cn from "classnames";
import ScrollLock from "react-scrolllock";
import s from "./ModalMenu.module.css";
import { Link } from "react-router-dom";
import { EmailIcon } from "../../../../../../../../icons/EmailIcon";
import { PhoneIcon } from "../../../../../../../../icons/PhoneIcon";

interface Props {
  className?: string;
  onClose: () => void;
}

export function ModalMenu({ className, onClose }: Props) {
  const scrollToEmail = () => {
    onClose();
    window.scroll({
      top: 4880,
      behavior: "smooth",
    });
  };
  return (
    <ScrollLock>
      <div className={cn(s.root, className)}>
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
