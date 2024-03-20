import { useEffect, useState } from 'react'
import ProductAdd from './component/ProductAdd';
import { EditProduct, addProduct, getProducts, removeProduct } from './services/product';
import { IProduct } from './interfaces/Product';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import ProductEdit from './component/ProductEdit';
import Counter from './component/Counter';
import Homepage from './component/Homepage';
import Articles from './Articles';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import './App.css'
// import Articles from './Articles';


function App() {
  // const [products, setProducts] = useState([]);
  // const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //     (async () => {
  //         try {
  //             setIsLoading(true);
  //             const { data } = await axios.get("http://localhost:3001/products");
  //             setProducts(data);
  //             setIsLoading(false);
  //         } catch (error) {
  //             setIsError(true);
  //         }
  //     })();
  // }, []);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Lỗi rồi</div>;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;

  return (
    <>
      {/* <Counter /> */}
      {data.map((product: IProduct) => (
        <div key={product.id}>{product.name}</div>
      ))}
      {/* <Products /> */}
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="products" element={<Products />} />
        {/* <Route path='products/add' element = {<ProductAdd  />} />
        <Route path='products/:id/edit' element = {<ProductEdit />} /> */}
        <Route path="/Home" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}


export default App;