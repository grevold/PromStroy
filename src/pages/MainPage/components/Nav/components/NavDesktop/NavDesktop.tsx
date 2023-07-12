import cn from "classnames";
import s from "./NavDesktop.module.css";

interface Props {
  className?: string;
}

export function NavDesktop({ className }: Props) {
  return <div className={cn(s.root, className)}></div>;
}
