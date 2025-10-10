import React from "react";
import News from "../components/blogs/News";
import Berichte from "../components/blogs/Berichte";
import Subscribe from "../components/blogs/Subscribe";
import ScrollToTop from "../components/general/ScrollToTop";

const Blogs = () => {
  return (
    <div className="py-29">
      <ScrollToTop />
      <News />
      <Berichte />
      <Subscribe />
    </div>
  );
};

export default Blogs;
