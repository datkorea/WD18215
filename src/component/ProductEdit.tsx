import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Products from "./Products";
import { IProduct } from "../interfaces/Product";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/product";

type ProductEditProps = {
  onEdit: (Product: IProduct) => void;
};
type Inputs = {
  name: string;
  price: number;
};
const ProductEdit = ({ onEdit }: ProductEditProps) => {
    const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
      formState: { errors },
    reset,
    } = useForm<Inputs>();
    useEffect(() => {
        (async () => {
            const data = await getProduct(id!);
            // fill du lieu vao form
            reset(data);
        })()
    },[])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onEdit(data);
    navigate("/products");
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

export default ProductEdit;
