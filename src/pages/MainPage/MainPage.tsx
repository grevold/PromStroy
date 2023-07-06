import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";
import { Industries } from "./components/Industries/Industries";
import { ClientsBlock } from "./components/ClientsBlock/ClientsBlock";
import { Reward } from "./components/Reward/Reward";

export function MainPage() {
  return (
    <div>
      <ParalaxBanner />
      <History />
      <ClientsBlock />
      <Industries />
      <Reward />
    </div>
  );
}
