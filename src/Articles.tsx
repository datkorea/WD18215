import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import Header from "./component/lab1/Header";
import Footer from "./component/lab1/Footer";
import Banner from "./component/Banner";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <Header />
    <Banner />
    <Footer />
  </div>
);
