import React { useContext } from "react";
import { SubmitHandler,useForm } from 'react-hook-form';
import Products from './Products';
import { IProduct } from '../interfaces/Product';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { ProductContext } from '../context/ProductContextProvider';

// type ProductAddProps = {
//   onAdd: (Product : IProduct ) => void
// };
type Inputs = {
  name: string;
  price: number;
};
const ProductAdd = () => {
  const [state, dispatch] = useContext(ProductContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = SubmitHandler<Inputs> = async (product) => {
    try {
      const { data } = await axios.post(`http://localhost:3000/products/products`, product);
      //rerender product
      dispatch({ type: "ADD_PRODUCT", payload: data });
      navigate("/products");
    
    } catch (error) {
      
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input
          type="text"
          placeholder="Ten san pham"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Truong name la bat buoc ! ?</span>}
        <input
          type="number"
          placeholder="Gia san pham"
          {...register("price")}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ProductAdd