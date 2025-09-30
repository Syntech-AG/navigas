import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarInfo from "./pages/CarInfo";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import About from "./pages/About";
import ReserveCar from "./pages/ReserveCar";
import Customer from "./pages/Customer";
import Faq from "./pages/Faq";
import Kontakt from "./pages/Kontakt";
import Blogs from "./pages/Blogs";
import FilteredCarPage from "./pages/FilteredCarPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/privatKunden" element={<Home />} /> */}
          <Route path="/uberUns" element={<About />} />
          <Route path="/privatKunden" element={<CarInfo />} />
          <Route path="/privatKunden2" element={<ReserveCar />} />
          <Route path="/geschäftskunden" element={<Customer />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/filter" element={<FilteredCarPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
