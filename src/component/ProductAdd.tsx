import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";

type ProductAddProps = {
  onAdd: (product: IProduct) => void;
};

type Inputs = {
  name: string;
  desc: string;
  image: string;
};

const ProductAdd = ({ onAdd }: ProductAddProps) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Lấy file đầu tiên từ danh sách các file được chọn
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImageUrl(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const product: IProduct = {
      name: data.name,
      desc: data.desc,
      image: imageUrl, // Sử dụng imageUrl đã được cập nhật từ handleImageChange
    };
    onAdd(product);
    navigate("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input
          type="text"
          placeholder="Tên sản phẩm"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Trường name là bắt buộc!</span>}
        <input type="text" placeholder="Description" {...register("desc")} />
        <input
          type="file"
          {...register("image", { required: true })}
          onChange={handleImageChange}
        />
        {errors.image && <span>Trường ảnh là bắt buộc!</span>}
        {imageUrl && (
          <img src={imageUrl} alt="Product" style={{ maxWidth: "100px" }} />
        )}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductAdd;
