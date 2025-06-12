import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import SearchScores from "../../pages/SearchScores";
import Reports from "../../pages/Reports";
import "./MainContent.css";
const MainContent = () => (
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search" element={<SearchScores />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  </main>
);

export default MainContent;
