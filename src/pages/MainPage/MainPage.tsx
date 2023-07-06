import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";
import { Industries } from "./components/Industries/Industries";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <div>
      <ParalaxBanner />
      <History />
      <Industries />
    </div>
  );
}
