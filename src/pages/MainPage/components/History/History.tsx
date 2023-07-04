import { useEffect, useState } from "react";
import s from "./History.module.css";

export function History() {
  const [scrollTop, setScrollTop] = useState({
    y: 0,
  });

  useEffect(() => {
    function handleScroll(event: any) {
      setScrollTop({ y: window.scrollY });
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={scrollTop.y > 200 ? s.VisibleBlock : s.UnVisibleBlock}>
          <img
            className={s.img}
            src={`${process.env.PUBLIC_URL}/history/block_1.png`}
          />
          <span className={s.text}>
            «Промышленное строительство» - поставщик металлопроката федерального
            уровня с опытом работы на рынке более 20 лет.{" "}
          </span>
        </div>
        <div className={scrollTop.y > 400 ? s.VisibleBlock : s.UnVisibleBlock}>
          <img
            className={s.img}
            src={`${process.env.PUBLIC_URL}/history/block_2.png`}
          />
          <span className={s.text}>
            История компании берёт своё начало с 1998 года. С каждым годом
            компания достигала новых высот. Все это время мы были с нашими
            клиентами и росли вместе с ними.
          </span>
        </div>
        <div
          className={
            scrollTop.y > 600 ? s.VisibleGeography : s.UnVisibleGeography
          }
        >
          <span className={s.text}>
            Удобное географическое расположение позволяет осуществлять снабжение
            предприятий-клиентов по всей стране: от Калининграда до
            Владивостока.
          </span>
          <img
            className={s.img}
            src={`${process.env.PUBLIC_URL}/history/monument.png`}
          />
        </div>
      </div>
    </div>
  );
}
