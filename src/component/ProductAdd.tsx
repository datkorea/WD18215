import React from 'react'
import { SubmitHandler,useForm } from 'react-hook-form';

type Props = {};
type Inputs = {
    name: string;
    price : number;
}
const ProductAdd = (props: Props) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }
  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)} action="">
              <input type="text"
                  placeholder='Ten san pham'
                  {...register("name",{required: true})}
              />
              {errors.name && <span>Truong name la bat buoc ! ?</span>}
              <input type="number" placeholder='Gia san pham' {...register("price")} />
            <button>Add</button>
          </form>
    </div>
  )
}

export default ProductAdd