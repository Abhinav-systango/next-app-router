import { fetchProducts } from '@/actions'
import BackButton from '@/components/backButton'
import Product from '@/components/product'
import React from 'react'

const Products = async () => {
  const all_products:ProductType[] = await fetchProducts()
  console.log("🚀 ~ Products ~ all_products:", all_products)
  return (

    <div className='max-w-5xl mx-auto'>
      <BackButton />
        <p className="text-xl font-bold  py-10">Products</p>
        <div className='flex flex-wrap gap-4'>
            {
                all_products.map(item => <Product product={item} key={Math.random()} />)
            }
        </div>
    </div>
  )
}

export default Products