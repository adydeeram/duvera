import axios from "axios";
import React, { useEffect, useState } from "react";

const xyz = [
  {
    data: {
      id: 0,
      name: "adnan",
      location: "abc",
    },
  },
];

const Items = () => {
  const [product, setProduct] = useState(xyz);
  const [productList, setProductList] = useState("");

    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products?limit=5")
      const data = await res
        console.log(res);
    };
    useEffect(() => {
      
      getData(); 
    },[])
    
     console.log(product.data);

  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold text-center mt-9">
          Our{" "}
          <span className="text-rose-600 border-b border-b-rose-600">
            Products
          </span>
        </h2>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Items;
