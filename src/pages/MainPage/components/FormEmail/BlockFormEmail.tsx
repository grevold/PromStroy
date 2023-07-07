import s from "./BlockFormEmail.module.css";
import { FormEmail } from "./components/FormEmail/FormEmail";

export function BlockFormEmail() {
  return (
    <div className={s.root}>
      <h2 className={s.header}>Оставьте заявку, мы вам обязательно ответим</h2>
      <FormEmail />
    </div>
  );
}
