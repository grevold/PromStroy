import { Requisites } from "../MainPage/components/Requisites/Requisites";
import s from "./RequisitesPage.module.css";

export function RequisitesPage() {
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <Requisites />
        </div>
      </div>
    </>
  );
}
