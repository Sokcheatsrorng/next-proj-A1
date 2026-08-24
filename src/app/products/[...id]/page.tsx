import { ProductDetail } from "@/components/products/ProductDetailCardComponent";


export default async function page({
  params
}: {
  params: Promise<{id: string | number}>
}) {

  const {id} = await params;
  const response = fetch(`https://fakestoreapi.com/products/${id}`).then(product => product.json())

  return (
    <div>
     <ProductDetail productDetailInterface={response}/>
    </div>
  )
}
