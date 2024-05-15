import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function B2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Coca Cola",
    price: 10000,
    quantity: 10,
  });
  return (
    <>
      B2
      <h3>Thông tin sản phẩm</h3>
      <ul>
        <li>id: {product.id}</li>
        <li>name: {product.name}</li>
        <li>price: {product.price}</li>
        <li>quantity {product.quantity}</li>
      </ul>
    </>
  );
}
