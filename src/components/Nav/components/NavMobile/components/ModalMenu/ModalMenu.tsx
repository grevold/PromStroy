import { BurgerClose } from "./../../../../../../icons/BurgerClose";
import { Link } from "react-router-dom";
import { EmailIcon } from "./../../../../../../icons/EmailIcon";
import { PhoneIcon } from "./../../../../../../icons/PhoneIcon";
import ScrollLock from "react-scrolllock";
import cn from "classnames";
import { useMemo } from "react";

import s from "./ModalMenu.module.css";
import { RoutePath } from "../../../../../../types";

interface Props {
  className?: string;
  onClose: () => void;
  isOpened: boolean | undefined;
}

export function ModalMenu({ className, onClose, isOpened }: Props) {
  const scrollToEmail = () => {
    onClose();
    window.scroll({
      top: 4880,
      behavior: "smooth",
    });
  };

  const rootClassName = useMemo(() => {
    if (isOpened === undefined) return cn(s.root, className);
    if (isOpened === false) return cn(s.root_fadeOut, className);
    return cn(s.root_fadeIn, className);
  }, [isOpened, className]);

  return (
    <ScrollLock isActive={isOpened === true}>
      <div className={rootClassName}>
        <BurgerClose onClose={onClose} className={s.burgerIconClose} />
        <ul className={s.listLinks}>
          <li>
            <Link className={s.link} to={RoutePath.MainPage}>
              Главная
            </Link>
          </li>
          <li>
            <Link className={s.link} to={RoutePath.RequisitesPage}>
              Реквизиты
            </Link>
          </li>
          <li>
            <Link className={s.link} to={RoutePath.ContactsPage}>
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