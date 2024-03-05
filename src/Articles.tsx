import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import Header from "./component/lab1/Header";
import Footer from "./component/lab1/Footer";
import Banner from "./component/lab1/Banner";
import Content from "./component/lab1/Content";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <Header />
    <Banner />
    <Content />
    <Footer />
  </div>
);
