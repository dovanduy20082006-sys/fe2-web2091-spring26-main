import { Routes, Route } from "react-router-dom";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lab1 />} />
      <Route path="/lab2" element={<Lab2 />} />
    </Routes>
  );
}

export default App;