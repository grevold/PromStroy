import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RoutePath } from "./types";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { RequisitesPage } from "./pages/RequisitesPage/RequisitesPage";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainPage />} path={RoutePath.MainPage} />
        <Route element={<ContactsPage />} path={RoutePath.ContactsPage} />
        <Route element={<RequisitesPage />} path={RoutePath.RequisitesPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
