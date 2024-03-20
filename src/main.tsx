import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
// import Header from './component/lab1/Header';
// import HeadSection from './component/lab1/HeadSection';
// import Footer from './component/lab1/Footer';
// import CardLatest from './component/lab1/CardLatest';
// import CardPanel from './component/lab1/CardPanel';
// import Section from './component/lab1/Section';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContext } from "./context/product";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductContext.Provider
    value={[
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ]}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContext.Provider>
  // <div>
  //   <Header />
  //   <HeadSection />
  //   <CardLatest />
  //   <CardPanel />
  //   <Section />
  //   <Footer />
  // </div>
);
