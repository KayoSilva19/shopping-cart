import { ShoppingCart } from '@phosphor-icons/react'

export function ProductCard({ product }) {
  const { title, thumbnail, price } = product
  const priceFormated = price
  console.log(price.type())

  return (
    <aside className="max-w-[300px] w-full bg-white flex flex-col cursor-pointer m-[0_auto] hover:drop-shadow-lg relative group">
      <img
        className="w-full"
        src="https://http2.mlstatic.com/D_812116-MLA71783168214_092023-W.jpg"
        alt="Product"
      />

      <div className="border border-t-zinc-200 p-5 ">
        <h2 className="font-medium text-zinc-800 text-[30px]">R$ {price}</h2>
        <div className="mt-2 flex justify-between items-center text-zinc-700">
          <h2>{title}</h2>
          <span className="bg-red-500 rounded p-1 text-white">500 Uni.</span>
        </div>
      </div>
      <button className=" hidden absolute top-3 right-3 text-blue-700 group-hover:flex transition-all ">
        <ShoppingCart size={24} weight="fill" />
      </button>
    </aside>
  )
}
