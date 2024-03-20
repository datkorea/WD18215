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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

    const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });
  const { mutate: add, isPending: isAddPending } = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await axios.post(
        "http://localhost:3000/products",
        product
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });
  const { mutate: remove } = useMutation({
    mutationFn: async (id: number) => {
      const { data } = await axios.delete(
        `http://localhost:3000/products/${id}`
      );
      return data;
    },
    onSuccess: () => {
      // refetching
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });
  const { mutate: update } = useMutation({
    mutationFn: async (product: IProduct) => {
      const { data } = await axios.put(
        `http://localhost:3000/products/${product.id}`,
        product
      );
      return data;
    },
    onSuccess: () => {
      // refetching
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;

  return (
    <>
      {/* <Counter /> */}
      <button onClick={() => add({ name: "Sản phẩm mới", price: 200 })}>
        {isAddPending ? "Adding..." : "Add"}
      </button>

      {data.map((product: IProduct) => (
        <div key={product.id}>
          {product.name}
          <button
            onClick={() =>
              update({ ...product, id: product.id, name: "Sản phẩm update" })
            }
          >
            Update
          </button>
          <button onClick={() => remove(product.id!)}>Xóa</button>
        </div>
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