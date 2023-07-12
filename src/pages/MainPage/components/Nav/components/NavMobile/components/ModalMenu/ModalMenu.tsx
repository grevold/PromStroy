import { BurgerClose } from "../../../../../../../../icons/BurgerClose";
import cn from "classnames";
import ScrollLock from "react-scrolllock";
import s from "./ModalMenu.module.css";

interface Props {
  className?: string;
  onClose: () => void;
}

export function ModalMenu({ className, onClose }: Props) {
  return (
    <ScrollLock>
      <div className={cn(s.root, className)}>
        <BurgerClose onClose={onClose} className={s.burgerIconClose} />
      </div>
    </ScrollLock>
  );
}
