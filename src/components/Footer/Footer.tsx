import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import { RoutePath } from "../../types";
import { Logo } from "../../icons/Logo";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { EmailIcon } from "../../icons/EmailIcon";
import cn from "classnames";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.container}>
        <ul className={s.nav}>
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
        </ul>
        <ul className={s.contacts_container}>
          <li className={s.contact_block}>
            <PhoneIcon />
            <span className={s.contact}>+7 951 343 65-65</span>
          </li>
          <li className={s.contact_block}>
            <EmailIcon />
            <span className={s.contact}>metall@promstroy74.ru</span>
          </li>
        </ul>
        <Logo className={s.logo} />
      </div>
    </div>
  );
}
