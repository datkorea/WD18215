import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
// import Header from './component/lab1/Header';
// import HeadSection from './component/lab1/HeadSection';
// import Footer from './component/lab1/Footer';
// import CardLatest from './component/lab1/CardLatest';
// import CardPanel from './component/lab1/CardPanel';
// import Section from './component/lab1/Section';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './context/ProductContextProvider';
import CounterContextProvider from './context/CounterContextProvider';

// const count = 10;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <CounterContextProvider>
    <ProductContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </ProductContextProvider>
  </CounterContextProvider>
  // <div>
  //   <Header />
  //   <HeadSection />
  //   <CardLatest />
  //   <CardPanel />
  //   <Section />
  //   <Footer />
  // </div>
);
