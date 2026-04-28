import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from './ProductCard' 
import ProductSkeleton from './ProductSkeleton'

const BestSeller = () => {
  const {products, loading}=useContext(AppContext);
  return (
    <div className='mt-16'>
      <p className='text-2xl font-medium md:text-3xl'>Best Sellers</p>
      <div className="my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
           {loading
          ? Array(6).fill("").map((_, i) => <ProductSkeleton key={i} />)
          : products
              .filter((product) => product.inStock)
              .slice(0, 6)
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
        }
          
      </div>
    </div>
  )
}

export default BestSeller


