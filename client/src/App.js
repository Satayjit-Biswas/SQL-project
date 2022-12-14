import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Insert from "./pages/Insert";
import Update from "./pages/Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Insert />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
