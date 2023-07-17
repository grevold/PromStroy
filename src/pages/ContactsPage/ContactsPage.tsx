import { Nav } from "../../components/Nav/Nav";
import s from "./ContactsPage.module.css";

export function ContactsPage() {
  return (
    <>
      <Nav />
      <div className={s.root}>Контакты</div>
    </>
  );
}
