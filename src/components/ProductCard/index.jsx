import { ShoppingCart } from '@phosphor-icons/react'

export function ProductCard({ product }) {
  const { title, thumbnail, price } = product

  const thumbnailFormated = thumbnail.replace(/\w\.jpg/gi, 'W.jpg')
  const priceFormated = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <aside className="max-w-[300px] w-full bg-white flex flex-col cursor-pointer m-[0_auto] hover:drop-shadow-lg relative group">
      <img className="w-full" src={thumbnailFormated} alt="Product" />

      <div className="border border-t-zinc-200 p-5 ">
        <h2 className="font-medium text-zinc-800 text-[30px]">
          {priceFormated}
        </h2>
        <h2 className="mt-2  text-zinc-700">{title}</h2>
      </div>
      <button className="hidden absolute top-3 right-3 text-blue-700 group-hover:flex transition-all ">
        <ShoppingCart size={24} weight="fill" />
      </button>
    </aside>
  )
}
