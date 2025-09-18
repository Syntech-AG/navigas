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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
