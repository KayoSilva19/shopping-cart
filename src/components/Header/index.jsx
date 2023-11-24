import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchBar } from '../SearchBar'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <header className="w-full bg-yellow-300">
      <div className="max-w-[1100px] w-full m-[0_auto]  flex justify-between p-5">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  )
}
