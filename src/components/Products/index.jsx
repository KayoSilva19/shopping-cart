import { useEffect, useState } from 'react'
import { getProducts } from '../../api/getProducts'
import { ProductCard } from '../ProductCard'

export function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts('Iphone').then((products) => setProducts(products))
  }, [])

  return (
    <section className="p-[120px_20px_50px] flex flex-wrap gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
