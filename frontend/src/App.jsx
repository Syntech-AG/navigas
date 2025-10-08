import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import { PRICING_TYPE } from "./components/car/Constans";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const CarInfo = lazy(() => import("./pages/CarInfo"));
const FilteredCarPage = lazy(() => import("./pages/FilteredCarPage"));
const ReserveCar = lazy(() => import("./pages/ReserveCar"));
const Faq = lazy(() => import("./pages/Faq"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogsInfo = lazy(() => import("./components/blogs/BlogsInfo"));

const Loading = () => (
  <div className="text-center py-20 text-xl">Loading...</div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uberUns" element={<About />} />
          <Route path="/api/cars/:id" element={<CarInfo />} />
          <Route
            path="/filter"
            element={<FilteredCarPage pricingType={PRICING_TYPE.COMPANY} />}
          />
          <Route
            path="/geschäftskunden"
            element={<FilteredCarPage pricingType={PRICING_TYPE.COMPANY} />}
          />
          <Route path="/reserve-car" element={<ReserveCar />} />
          <Route path="/reserve-car-2" element={<ReserveCar isFinal />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogsInfo />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
