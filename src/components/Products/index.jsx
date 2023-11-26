import { useEffect, useState } from 'react'
import { getProducts } from '../../api/getProducts'
import { ProductCard } from '../ProductCard'
import { Loading } from '../Loading'

export function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts('Iphone').then((products) => {
      setProducts(products)
      setLoading(false)
    })
  })

  return (
    (loading && <Loading />) || (
      <section className="p-[120px_20px_50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    )
  )
}
