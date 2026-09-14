"use client"

import {  useEffect, useState } from "react";
import ProductCardComponent, { ProductType } from "./ProductCardComponent";
import Link from "next/link";

interface productInterfaceList {
  productFromApi: Promise<ProductType[]>
}

export default function ProductCardListComponent({ productFromApi }: productInterfaceList) {

  // console.log(productFromApi)
  // const products = use(productFromApi);
  // console.log(`==> products`, products)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}/products`);
      console.log(`Response data: `, res)
      const data = await res.json();
      console.log(`Data from API: `, data)
      setProducts(data);
    }
    fetchingData()
  }, [])

  return (
    <div className="container grid grid-cols-4 gap-8 ">
      {/* {
        products.map((title,_)=> {
          return <h1 key={_}>{title}</h1>
        })
      } */}
      {
        products?.map(({ image, title, price, description, id }: ProductType) => (
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
