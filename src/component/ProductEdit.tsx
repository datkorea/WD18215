import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../interfaces/Product";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/product";

type ProductEditProps = {
  onEdit: (product: IProduct) => void;
};

type Inputs = {
  name: string;
  desc: string;
  image: string;
};

const ProductEdit = ({ onEdit }: ProductEditProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImageUrl(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(id);
        reset(data);
        setImageUrl(data.image);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id, reset]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const product: IProduct = {
      id: id,
      name: data.name,
      desc: data.desc,
      image: imageUrl,
    };
    onEdit(product);
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
          {...register("image")}
          onChange={handleImageChange}
        />
        {errors.image && <span>Trường ảnh là bắt buộc!</span>}
        {imageUrl && (
          <img src={imageUrl} alt="Product" style={{ maxWidth: "100px" }} />
        )}
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default ProductEdit;
