import React from 'react'
import { IProduct } from '../interfaces/Product';
import { Link } from 'react-router-dom';

interface ProductProps {
  products: IProduct[];
  onRemove : (id: number) => void;
}

const Products = ({ products, onRemove }: ProductProps) => {
  return (
    <div>
      {products.map((product: IProduct, index) => (
        <div key={index}>
          {product.name}{" "}
          <button onClick={() => onRemove(product.id!)}>Xóa</button>
          <Link to={`/product/${product.id}/edit`}>Cập nhật</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;