import React from 'react'

interface ProductProps {
  item: {
    name: string;
    price: number
  };
}

const Product = (props : ProductProps) => {
  return (
    <div>
      <div>Product name : {props.item.name}</div>
      <div>Product price: {props.item.price}</div>
    </div>
  );
}

export default Product