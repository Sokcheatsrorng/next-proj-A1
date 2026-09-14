"use client"

import { use } from "react";
import ProductCardComponent, { ProductType } from "./ProductCardComponent";
import Link from "next/link";

interface productInterfaceList {
  productFromApi: Promise<ProductType[]>
}

export default function ProductCardListComponent({productFromApi}:productInterfaceList) {

  const products = use(productFromApi);
  console.log(`==> products`, products)

  return (
    <div className="container grid grid-cols-4 gap-8 ">
      {
        products?.map(({ image, title, price, description, id }:ProductType) => (
          <Link key={id} href={`/products/${id}`}>
           <ProductCardComponent
            id={id}
            image={image}
            title={title}
            price={price}
            description={description} />
          </Link>
        ))
      }

    </div>
  )
}
