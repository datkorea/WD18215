import { useEffect, useState } from 'react'
import ProductAdd from './component/ProductAdd';
import { EditProduct, addProduct, getProducts, removeProduct } from './services/product';
import { IProduct } from './interfaces/Product';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import ProductEdit from './component/ProductEdit';
// import './App.css'
// import Articles from './Articles';


function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element = {<h1>Homepage</h1>} />
        <Route path='products' element = {<Products  />} />
        {/* <Route path='products/add' element = {<ProductAdd  />} />
        <Route path='products/:id/edit' element = {<ProductEdit />} /> */}
     </Routes>
    </>
  );
}

export default App;