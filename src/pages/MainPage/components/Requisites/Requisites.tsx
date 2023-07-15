import { useState } from "react";
import s from "./Requisites.module.css";
import { useRequisites } from "./useRequisites";

export function Requisites() {
  const { state } = useRequisites();

  return (
    <div className={s.root}>
      <span className={s.header}>
        Вы можете скачать PDF-файл с реквизитами компании
      </span>
      <a
        className={s.container}
        href="/requisites/Requisites_Prom_Stroy.pdf"
        download
      >
        <img
          className={s.img}
          src={`${process.env.PUBLIC_URL}/requisites/RequisitesIcon.png`}
        />
        <div
          className={state ? s.shadowBlock : s.shadowBlockLowShadowEffect}
        ></div>
        <button className={s.button}>Скачать</button>
      </a>
    </div>
  );
}
