import { ShoppingCart } from '@phosphor-icons/react'

export function CartButton() {
  return (
    <button className="flex items-center justify-center p-1 text-zinc-800 relative">
      <ShoppingCart size={32} />
      <span className="absolute flex h-5 w-5 top-0 left-[-5px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 items-center justify-center text-neutral-50 font-semibold text-[11px]  ">
          10
        </span>
      </span>
    </button>
  )
}
