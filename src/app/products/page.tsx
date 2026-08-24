
import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export default function page() {
  const response =  fetch('https://fakestoreapi.com/products').then(products => products.json())

  return (
    <div>
     <ProductCardListComponent productFromApi={response}/>
    </div>
  )
}
