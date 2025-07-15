import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import PageNotFound from "./components/partials/PageNotFound";
import Basketball from "./components/pages/basketball/Basketball";
import Football from "./components/pages/football/Football";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/football" element={<Football />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
