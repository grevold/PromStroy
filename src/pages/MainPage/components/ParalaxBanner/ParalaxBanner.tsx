import { useState } from "react";
import { Logo } from "../../../../icons/Logo";

import s from "./ParalaxBanner.module.css";
import { ArrowDown } from "./components/ArrowDown/ArrowDown";

export function ParalaxBanner() {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(event: any) {
    setMousePosition({ x: event.pageX, y: event.pageY });
  }

  return (
    <div className={s.root}>
      <div
        className={s.layers_container}
        onMouseMove={(event) => handleMouseMove(event)}
        style={{
          transform: `rotateX(${
            (MousePosition.x - window.innerWidth / 2) * -0.009
          }deg) rotateY(${
            (MousePosition.y - window.innerHeight / 2) * 0.01
          }deg)`,
        }}
      >
        <div
          className={s.layer_1}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/sky.png')`,
          }}
        ></div>

        <div
          className={s.layer_2}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/construction2.png')`,
          }}
        ></div>
        <div className={s.layer_dark} />
        <div className={s.layer_3} />
        <div className={s.layer_text}>
          <Logo className={s.logo} />
        </div>
        <div className={s.arrow}>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
