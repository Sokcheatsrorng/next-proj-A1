import AnimatedListDemo from "@/components/shadcn-space/animated-list/animated-list-01";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hompage',
  description: "BlockCommerce is the platform which manage the products with many features providing saling items and clothes.",
  keywords: 'Product, Clothes for men, Clothes for women, Clothes for kids, E-Commerce website.',
  openGraph:{
     title:'Homepage',
     description: 'BlockCommerce is the platform which manage the products with many features providing saling items and clothes.',
     images: ['A1_Thumbnail_project.png']
  }
};


export default function Home() {
  return (
  <AnimatedListDemo/>
  );
}
