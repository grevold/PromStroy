import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";

import s from "./History.module.css";

export function History() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  const { ref: ref2, isElementInViewPort: isElementInViewPort2 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  const { ref: ref3, isElementInViewPort: isElementInViewPort3 } =
    useElementInViewPortListener<HTMLDivElement>(30);

  return (
    <div className={s.root} id={"scroller"}>
      <div className={s.container}>
        <div className={s.age}>
          <div
            ref={ref1}
            className={isElementInViewPort1 ? s.VisibleBlock : s.UnVisibleBlock}
          >
            <img
              className={s.img}
              src={`${process.env.PUBLIC_URL}/history/block_1.png`}
            />
            <span className={s.text}>
              «Промышленное строительство» - поставщик металлопроката
              федерального уровня с опытом работы на рынке более 25 лет.
              Четверть века стабильных поставок, обширная номенклатура товаров и
              надёжность.
            </span>
          </div>
          <div
            ref={ref2}
            className={isElementInViewPort2 ? s.VisibleBlock : s.UnVisibleBlock}
          >
            <img
              className={s.img}
              src={`${process.env.PUBLIC_URL}/history/block_2.png`}
            />
            <span className={s.text}>
              История компании берёт своё начало в 1998 году. Каждый новый
              отрезок времени - очередные поставленные цели, покорённые вершины
              и открытые направления, тесный контакт с клиентами и доверительные
              отношения, ставшие лишь крепче.
            </span>
          </div>
        </div>
        <div
          ref={ref3}
          className={
            isElementInViewPort3 ? s.VisibleGeography : s.UnVisibleGeography
          }
        >
          <img
            className={s.img}
            src={`${process.env.PUBLIC_URL}/history/monument.png`}
          />
          <span className={s.text_geography}>
            Удобное географическое расположение позволяет нам осуществлять
            снабжение партнёров от Калининграда до Владивостока с одинаково
            высокой эффективностью. В нашем арсенале находятся любые, в том
            числе самые сложные, логистические решения. От поставок
            автотранспортом до перевозок морем через любой порт, от железной
            дороги до использования авиации. Челябинск, как истинный Город
            трудовой доблести, продолжает питать предприятия необъятной страны
            всем необходимым и по сей день.
          </span>
        </div>
      </div>
    </div>
  );
}
