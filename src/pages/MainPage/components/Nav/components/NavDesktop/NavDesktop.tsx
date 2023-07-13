import cn from "classnames";
import s from "./NavDesktop.module.css";
import { PhoneIcon } from "../../../../../../icons/PhoneIcon";
import { EmailIcon } from "../../../../../../icons/EmailIcon";
import { useNavDesktop } from "./useNavDesktop";

interface Props {
  className?: string;
}

export function NavDesktop({ className }: Props) {
  const { state, handleClickTel, handleClickEmail } = useNavDesktop();
  return (
    <div className={cn(s.root, className)}>
      <div className={s.container}>
        <ul className={s.navigation}>
          <li className={s.link}>Реквизиты</li>
          <li className={s.link}>Галерея</li>
          <li className={s.link}>Контакты</li>
        </ul>
        <ul className={s.contacts}>
          <li onClick={handleClickTel} className={s.tel}>
            <PhoneIcon />
            {state.tel ? (
              <span className={s.telNumber}>+79518131863</span>
            ) : (
              <span className={s.unVisibleTelNumber}>+79518131863</span>
            )}
          </li>

          <li className={s.email} onClick={handleClickEmail}>
            <EmailIcon />
            {state.email ? (
              <span className={s.telNumber}>metall.promstroy74@gmail.com</span>
            ) : (
              <span className={s.unVisibleTelNumber}>+79518131863</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
