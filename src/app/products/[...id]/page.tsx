import { ProductDetail } from "@/components/products/ProductDetailCardComponent";


export default async function ProductDet({
  params
}: {
  params: Promise<{id: string | number}>
}) {

  const {id} = await params;
  const response = fetch(`https://fakestoreapi.com/products/${id}`).then(product => product.json())
  .catch((error) => console.log(error))

  return (
    <div>
     <ProductDetail productDetailInterface={response}/>
    </div>
  )
}
