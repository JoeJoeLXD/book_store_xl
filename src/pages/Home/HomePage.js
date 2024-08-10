// src/pages/Home/HomePage.js
import React from "react";
import useTitle from "../../hooks/useTitle";
import { Hero, FeaturedProducts, Testimonials, Faq } from "./components";

const HomePage = () => {
  useTitle("Access Latest CS eBooks Collection");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default HomePage;
