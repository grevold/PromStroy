import { ParalaxBanner } from "./components/ParalaxBanner/ParalaxBanner";
import { History } from "./components/History/History";
import { Industries } from "./components/Industries/Industries";
import { ClientsBlock } from "./components/ClientsBlock/ClientsBlock";
import { Reward } from "./components/Reward/Reward";
import { BlockFormEmail } from "./components/FormEmail/BlockFormEmail";
import { Nav } from "./components/Nav/Nav";

export function MainPage() {
  return (
    <div>
      <Nav />
      <ParalaxBanner />
      <History />
      <ClientsBlock />
      <Industries />
      <Reward />
      <BlockFormEmail />
      <Industries />
    </div>
  );
}
