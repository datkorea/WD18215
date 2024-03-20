import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import { IProduct } from "../../interfaces/Product";

const CardPanel = () => {
  const [panel, setPanel] = useState<IProduct[] | null>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setPanel(response.data);
        console.log(response);
      } catch (error) {
        console.error("Không có dữ liệu:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!panel) {
    return <div>Loading...</div>;
  }

  console.log(panel);

  return (
    <div className="cardPanel">
      {panel.map((product) => (
        <div className="text1" key={product.id}>
          <div>
            <img src={product.image} alt="" />
          </div>
          <div className="content">
            <h2>{product.name}</h2>
            <div className="text">
              <p>{product.desc}</p>
              <div className="text2">
                <p>May 20th 2020</p>
                <p className="text3">Read more</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPanel;
