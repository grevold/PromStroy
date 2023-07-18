import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RoutePath } from "./types";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { RequisitesPage } from "./pages/RequisitesPage/RequisitesPage";
import { YMaps } from "@pbe/react-yandex-maps";

function App() {
  return (
    <YMaps>
      <HashRouter>
        <Routes>
          <Route element={<MainPage />} path={RoutePath.MainPage} />
          <Route element={<ContactsPage />} path={RoutePath.ContactsPage} />
          <Route element={<RequisitesPage />} path={RoutePath.RequisitesPage} />
        </Routes>
      </HashRouter>
    </YMaps>
  );
}

export default App;
