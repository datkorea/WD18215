import React from 'react'
import { SubmitHandler,useForm } from 'react-hook-form';
import Products from './Products';
import { IProduct } from '../interfaces/Product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
  onAdd: (Product : IProduct ) => void
};
type Inputs = {
    name: string;
    price : number;
}
const ProductAdd = ({ onAdd }: ProductAddProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onAdd(data);
    navigate("/products")
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