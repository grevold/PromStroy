import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Nav/Nav";
import { Requisites } from "../MainPage/components/Requisites/Requisites";
import s from "./RequisitesPage.module.css";

export function RequisitesPage() {
  return (
    <>
      <Nav />
      <div className={s.root}>
        <div className={s.container}>
          <Requisites />
        </div>
      </div>
      <Footer />
    </>
  );
}
