

type CategoryType ={
  id:string,
  name:string
}

export type Products = {
  id: string | number,
  price: number,
  title:string
  category: CategoryType,
  images: string[]
}

