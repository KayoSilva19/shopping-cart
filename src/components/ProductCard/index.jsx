import { ShoppingCart } from '@phosphor-icons/react'
import { formatCurrency } from '../../utils/formatCurrency'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function ProductCard({ product }) {
  const { title, thumbnail, price } = product

  const { cartItems, setCartItems } = useContext(AppContext)

  const thumbnailFormated = thumbnail.replace(/\w\.jpg/gi, 'W.jpg')

  function handleAddCart() {
    setCartItems([...cartItems, product])
  }

  return (
    <aside className="max-w-[300px] w-full bg-white flex flex-col cursor-pointer m-[0_auto] hover:drop-shadow-lg relative group">
      <img className="w-full" src={thumbnailFormated} alt="Product" />

      <div className="border-t border-t-zinc-200 p-5 ">
        <h2 className="font-medium text-zinc-800 text-[30px]">
          {formatCurrency(price, 'BRL')}
        </h2>
        <h2 className="mt-2  text-zinc-700">{title}</h2>
      </div>
      <button
        onClick={handleAddCart}
        className="hidden absolute top-5 right-5 text-blue-700 group-hover:flex group-hover:bg-slate-100 group-hover:p-4 group-hover:rounded-full transition-all "
      >
        <ShoppingCart size={24} weight="fill" />
      </button>
    </aside>
  )
}
