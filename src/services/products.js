import axios from 'axios'

const baseUrl = 'https://fakestoreapi.com/products'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }