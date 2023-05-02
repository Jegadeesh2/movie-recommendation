import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
