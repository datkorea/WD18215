import React from 'react'

interface ProductProps {
    name: string;
    price : number
}

const Product = (props : ProductProps) => {
  return (
    <div>
      <div>Product name : {props.name}</div>
      <div>Product price: {props.price}</div>
    </div>
  );
}

export default Product