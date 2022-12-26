import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Nav from "./components/Nav";
import Find from "./pages/Find";
import Insert from "./pages/Insert";
import Remove from "./pages/Remove";
import Update from "./pages/Update";
function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
        <Routes>
          <Route path="/" element={<Insert />} />
          <Route path="/update" element={<Update />} />
          <Route path="/find" element={<Find />} />
          <Route path="/remove" element={<Remove />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
