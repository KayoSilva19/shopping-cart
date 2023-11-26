import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState, useContext } from 'react'
import { getProducts } from '../../api/getProducts'
import { AppContext } from '../../context/AppContext'

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('')

  const { setProducts, setLoading } = useContext(AppContext)

  async function handleSearch(e) {
    e.preventDefault()
    setLoading(true)
    const products = await getProducts(searchValue)

    setProducts(products)
    setSearchValue('')
    setLoading(false)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-[500px] w-full flex bg-white  gap-3  pr-4 justify-between drop-shadow-md"
    >
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
