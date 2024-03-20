import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { IProduct } from "../interfaces/Product";
import { getProducts } from "../services/product";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, dispatch] = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    })();
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products?.value?.map((product: IProduct) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <button onClick={() => onRemove(product.id)}>Xóa</button>
                <Link to={`/product/${product.id}/edit`}>Cập nhật</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
