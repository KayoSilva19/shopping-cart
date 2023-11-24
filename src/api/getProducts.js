import axios from 'axios'

export const getProducts = async (query) => {
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  )

  const dataProducts = response.data.results
  return dataProducts
}
