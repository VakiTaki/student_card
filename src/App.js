import { Routes, Route } from "react-router-dom";
import CardsPage from "./components/pages/cardsPage";
import EditCardPage from "./components/pages/editCardPage";
import Page404 from "./components/pages/page404";
import RegCardPage from "./components/pages/regCardPage";

function App() {
  return (
    <div className="App bg-slate-100  h-screen">
      <Routes>
        <Route path="/:id?" element={<CardsPage />} />
        <Route path="/reg" element={<RegCardPage />} />
        <Route path="/:id?/edit" element={<EditCardPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
