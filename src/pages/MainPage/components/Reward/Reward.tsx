import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";

import s from "./Reward.module.css";

export function Reward() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  const { ref: ref2, isElementInViewPort: isElementInViewPort2 } =
    useElementInViewPortListener<HTMLImageElement>(30);
  if (window.innerWidth < 1000) {
    return (
      <div className={s.root}>
        <span className={s.text} ref={ref1}>
          «Промышленное строительство» - надёжный поставщик по версии ЭТП
          Фабрикант
        </span>
        <img
          ref={ref2}
          className={s.img}
          src={`${process.env.PUBLIC_URL}/reward/reward.png`}
        />
      </div>
    );
  }
  return (
    <div className={s.root}>
      <span
        className={isElementInViewPort1 ? s.text : s.UnVisibleText}
        ref={ref1}
      >
        «Промышленное строительство» - надёжный поставщик по версии ЭТП
        Фабрикант
      </span>
      <img
        ref={ref2}
        className={isElementInViewPort2 ? s.img : s.UnVisibleImg}
        src={`${process.env.PUBLIC_URL}/reward/reward.png`}
      />
    </div>
  );
}
