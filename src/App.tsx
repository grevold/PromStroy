import { HashRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "./types";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RequisitesPage } from "./pages/RequisitesPage/RequisitesPage";

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
