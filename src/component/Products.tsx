import React from "react";
import { IProduct } from "../interfaces/Product";
import { Link } from "react-router-dom";

interface ProductProps {
  products: IProduct[];
  onRemove: (id: number) => void;
}

const Products = ({ products, onRemove }: ProductProps) => {
  return (
    <div>
      <Link to="/products/add">
        <button style={buttonStyle}>ADD</button>
      </Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: IProduct) => (
            <tr key={product.id}>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.desc}</td>
              <td style={tdStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                />
              </td>
              <td style={tdStyle}>
                <button
                  style={deleteButtonStyle}
                  onClick={() => onRemove(product.id!)}
                >
                  Xóa
                </button>
                <Link to={`/products/${product.id}/edit`} style={linkStyle}>
                  Cập nhật
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableStyle = {
  border: "1px solid #ddd",
  borderCollapse: "collapse",
  width: "100%",
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  backgroundColor: "#f44336", // Màu đỏ
  border: "none",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
};

const linkStyle = {
  backgroundColor: "#008CBA",
  border: "none",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
};

const imageStyle = {
  maxWidth: "100px",
};

export default Products;
