import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <form className="max-w-[500px] w-full flex bg-white  gap-3  pr-4 justify-between drop-shadow-md">
      <input
        type="search"
        placeholder="Buscar Produtos"
        required
        className="p-3 grow outline-none border-r-2 border-neutral-200"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center justify-center text-zinc-800"
      >
        <MagnifyingGlass size={24} />
      </button>
    </form>
  )
}
