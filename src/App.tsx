import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RoutePath } from "./types";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainPage />} path={RoutePath.MainPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
