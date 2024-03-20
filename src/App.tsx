import { useEffect, useState } from "react";
import ProductAdd from "./component/ProductAdd";
import {
  EditProduct,
  addProduct,
  getProducts,
  removeProduct,
} from "./services/product";
import { IProduct } from "./interfaces/Product";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import ProductEdit from "./component/ProductEdit";
import Homepage from "./component/Homepage";
import Articles from "./Articles";
// import './App.css'
// import Articles from './Articles';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const onHandleAdd = async (product: IProduct) => {
    try {
      const data = await addProduct(product);
      setProducts([...products, data]);
    } catch (error) {}
  };
  const onHandleEdit = async (product: IProduct) => {
    try {
      const data = await EditProduct(product);
      setProducts(products.map((item) => (item.id == data.id ? data : item)));
    } catch (error) {}
  };
  const onHandleRemove = async (id: number) => {
    try {
      const data = await removeProduct(id);
      setProducts(products.filter((item) => item.id !== id));
    } catch (error) {}
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route
          path="products"
          element={<Products products={products} onRemove={onHandleRemove} />}
        />
        <Route
          path="products/add"
          element={<ProductAdd onAdd={onHandleAdd} />}
        />
        <Route
          path="products/:id/edit"
          element={<ProductEdit onEdit={onHandleEdit} />}
        />
        <Route path="/" element={<h1>Homepage</h1>} />
        {/* <Route path='products/add' element = {<ProductAdd  />} />
        <Route path='products/:id/edit' element = {<ProductEdit />} /> */}
        <Route path="/Home" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
