import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import { PRICING_TYPE } from "./components/car/Constans";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import CarInfo from "./pages/CarInfo";
import FilteredCarPage from "./pages/FilteredCarPage";
import ReserveCar from "./pages/ReserveCar";
import Faq from "./pages/Faq";
import Kontakt from "./pages/Kontakt";
import Blogs from "./pages/Blogs";
import BlogsInfo from "./components/blogs/BlogsInfo";
import FlexRent from "./pages/FlexRent";
import Customer from "./pages/Customer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberUns" element={<About />} />
        <Route path="/api/cars/:id" element={<CarInfo />} />
        <Route
          path="/firmenkunden"
          element={<FilteredCarPage pricingType={PRICING_TYPE.COMPANY} />}
        />
        <Route
          path="/privatkunden"
          element={<FilteredCarPage pricingType={PRICING_TYPE.NORMAL} />}
        />
        <Route path="/reserve-car" element={<ReserveCar />} />
        <Route path="/reserve-car-2" element={<ReserveCar isFinal />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogsInfo />} />
        <Route path="/flexRent" element={<FlexRent />} />
        <Route path="/autoAboPro" element={<Customer />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
