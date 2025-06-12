import Menu from "./components/Menu";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        <Menu />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
