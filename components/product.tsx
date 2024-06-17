'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Product = ({ product }: { product: ProductType }) => {
    const router = useRouter()
    const handleView = (id: number) => {
        router.push(`/products/${id}`)
    }
  return (
    <div className="min-w-44 p-4 shadow-xl">
      <div className="cursor-pointer" onClick={() => handleView(product.id)}>
        <Image
          src={product.image_src[0]}
          alt=""
          height={120}
          width={120}
          className="mx-auto py-2"
        />
      </div>
      <p className="text-xs">{product.vendor}</p>
      <p className="">
        {product.name.length > 15
          ? product.name.slice(0, 15) + "..."
          : product.name}
      </p>
      <div className="flex justify-between items-center" >
        <div className="text-sm mt-2">
          $<span className="text-blue-500">{product.price}</span>
          <span className="line-through ml-2">{product.compare_at_price}</span>
        </div>
        <button onClick={() => handleView(product.id)} className="bg-blue-500 px-2 py-1 rounded">
            View
        </button>
      </div>
    </div>
  );
};

export default Product;
