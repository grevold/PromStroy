import { Requisites } from "../MainPage/components/Requisites/Requisites";
import { texts } from "../../texts";
import { useState } from "react";
import s from "./RequisitesPage.module.css";
import { ArrowDown } from "./../../icons/ArrowDown";
import { ArrowUp } from "../../icons/ArrowUp";

export function RequisitesPage() {
  const [state, setState] = useState(false);
  function handleClick() {
    if (state) {
      setState((prevState) => !prevState);
      window.scrollTo(0, 0);
      return;
    }
    setState((prevState) => !prevState);
  }
  return (
    <>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.header}>Реквизиты</h1>
          <button
            className={state ? s.buttonDown : s.button}
            onClick={handleClick}
          >
            <span>{state ? "Скрыть" : "Развернуть"}</span>
            {state ? <ArrowUp /> : <ArrowDown />}
          </button>
          <div className={state ? s.tableRequisites : s.hiddenTableRequisites}>
            {texts.Requisites.map((requisit) => (
              <div className={s.row} key={requisit.title}>
                <span className={s.title}>{requisit.title}</span>
                <span className={s.text}>{requisit.text}</span>
              </div>
            ))}
          </div>
          <div className={state ? s.blurBlockUnVisible : s.blurBlock}></div>
          <Requisites />
        </div>
      </div>
    </>
  );
}
