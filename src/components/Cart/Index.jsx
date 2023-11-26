import { useContext } from 'react'
import { CartItem } from '../CartItem/Index'
import { AppContext } from '../../context/AppContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { WarningCircle } from '@phosphor-icons/react'

export function Cart() {
  const { cartItems, setCartItem } = useContext(AppContext)
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0)

  const { isCardVisible } = useContext(AppContext)

  const openCartStyle = isCardVisible ? 'translate-x-[0]' : 'translate-x-[110%]'
  return (
    <section
      className={`w-full max-w-sm bg-white h-screen fixed top-0 right-0 px-5 pt-28 pb-5 flex flex-col justify-between ${openCartStyle}  transition-all duration-150 ease-linear drop-shadow-md`}
    >
      <div className=" grow overflow-auto">
        {cartItems.length === 0 && (
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <WarningCircle className="text-zinc-800" size={48} />
            <span className="text-zinc-800"> Seu Carrinho esta vazio</span>
          </div>
        )}
        {cartItems.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      <div className="text-[24px] pt-9 pb-4 text-zinc-800 border-t-2 ">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  )
}
