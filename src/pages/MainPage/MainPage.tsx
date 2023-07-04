import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <div>
      <ParalaxBanner />
      <History />
    </div>
  );
}
