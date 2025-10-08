import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const CarInfo = lazy(() => import("./pages/CarInfo"));
const About = lazy(() => import("./pages/About"));
const ReserveCar = lazy(() => import("./pages/ReserveCar"));
const Customer = lazy(() => import("./pages/Customer"));
const Faq = lazy(() => import("./pages/Faq"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Blogs = lazy(() => import("./pages/Blogs"));
const FilteredCarPage = lazy(() => import("./pages/FilteredCarPage"));
const BlogsInfo = lazy(() => import("./components/blogs/BlogsInfo"));

const LoadingSpinner = () => (
  <div className="container mx-auto pt-50 text-center py-20">
    <p className="text-xl">Loading...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uberUns" element={<About />} />
          <Route path="/api/cars/:id" element={<CarInfo />} />
          <Route path="/reserve-car" element={<ReserveCar />} />
          <Route
            path="/reserve-car-2"
            element={<ReserveCar isFinal={true} />}
          />
          <Route path="/geschäftskunden" element={<Customer />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/filter" element={<FilteredCarPage />} />
          <Route path="/blogs/:blogId" element={<BlogsInfo />} />
          <Route path="/flexRent" element={<FlexRent />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
