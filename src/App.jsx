// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CharacterDetail from "./views/components/CharacterDetail";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;