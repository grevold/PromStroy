import s from "./MainPage.module.css";
import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";

export function MainPage() {
  return (
    <div>
      <ParalaxBanner />
      <History />
    </div>
  );
}
