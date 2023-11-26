import { Trash } from '@phosphor-icons/react'
import { formatCurrency } from '../../utils/formatCurrency'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function CartItem({ data }) {
  const { id, thumbnail, title, price } = data

  const { cartItems, setCartItems } = useContext(AppContext)

  function handleDelete() {
    const filteredItems = cartItems.filter((product) => product.id !== id)
    setCartItems(filteredItems)
  }
  return (
    <div className="flex justify-between items-center pb-4 pt-4 border-b-2 last:border-none relative ">
      <img className="w-20" src={thumbnail} alt="Imagem do produto" />
      <div className="flex flex-col font-medium pl-3 pr-8 ">
        <h3 className="text-sm text-zinc-500 mb-2">{title}</h3>
        <span className="text-lg">{formatCurrency(price, 'BRL')}</span>
        <button
          onClick={() => handleDelete(id)}
          className="absolute top-4 right-0 bg-red-500 p-1 rounded text-white"
          type="button"
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  )
}
