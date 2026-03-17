import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AnalyzerPage from "./pages/AnalyzerPage";

export default function App() {
  return (
    <div className="noise min-h-screen bg-cyber-black">
      <Nav />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<AnalyzerPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
