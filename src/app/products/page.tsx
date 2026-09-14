
import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import { Metadata } from "next";

// static metadata for about page
// export const metadata: Metadata = {
//   title: 'Products',
//   description: "This is product page which list down many products from the website.",
//   keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
//   openGraph:{
//      title:'Products',
//      description: 'This is product page which list down many products from the website.',
//      images: ['A1_Thumbnail_project.png']
//   }
// };

export default function ProductPage() {
  const response =  fetch('https://fakestoreapi.com/products').then(products => products.json())

  return (
    
     <ProductCardListComponent productFromApi={response}/>
    
  )
}
