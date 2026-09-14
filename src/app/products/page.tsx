
import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import { Metadata } from "next";


// static metadata for about page
export const metadata: Metadata = {
  title: 'Products',
  description: "This is product page which list down many products from the website.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'Products',
     description: 'This is product page which list down many products from the website.',
     images: ['A1_Thumbnail_project.png']
  }
};

async function getData(){
   const res = await fetch(`${process.env.FAKE_STORE_API}/products`);
   console.log(`Response data: `, res)
   
   if(res.ok){
      const data = await res.json();
      console.log(`Data from API: `, data)
      return data;
   }else{
      console.log('Failed to fetch')
   }
}

export default  function ProductPage() {

  const response = getData();

  return (
    
     <ProductCardListComponent productFromApi={response}/>
    
  )
}
