import { useState } from 'react'
import { AppContext } from './AppContext'

export function Provider({ children }) {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [isCardVisible, setIsCardVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCardVisible,
    setIsCardVisible,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
