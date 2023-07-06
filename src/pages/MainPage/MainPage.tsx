import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";
import { Industries } from "./components/Industries/Industries";
import { ClientsBlock } from "./components/ClientsBlock/ClientsBlock";

export function MainPage() {
  return (
    <div>
      <ParalaxBanner />
      <History />
      <ClientsBlock />
      <Industries />
    </div>
  );
}
