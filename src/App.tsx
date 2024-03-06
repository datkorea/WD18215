import { useState } from 'react'
import './App.css'
import Product from './component/Product'
// import Header from './component/lab1/Header';
// import HeadSection from './component/lab1/HeadSection';
// import CardLatest from './component/lab1/CardLatest';
// import CardPanel from './component/lab1/CardPanel';
// import Section from './component/lab1/Section';
// import Footer from './component/lab1/Footer';

function App() {
  
  return (
    <div>
      {/* <Header />
       <HeadSection />
       <CardLatest />
       <CardPanel />
      <Section />
       <Footer /> */}
      <Product name="ao quan" price={1000} />
      <Product name="ao quan" price={1000} />
      <Product name="ao quan" price={1000} />
    </div>
  );
}

export default App
