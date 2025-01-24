import Labs from "./labs";
import Kambaz from "./kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
  <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="kambaz" />} />
        <Route path="/labs/*" element={<Labs />} />
        <Route path="/kambaz/*" element={<Kambaz />} />
      </Routes>
    </div>
  </HashRouter> );}