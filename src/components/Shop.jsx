import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import Category from './Category'

const Shop = () => {
  const products = useSelector(state => state.products)
  const category = useSelector(state => state.category)
  const search = useSelector(state => state.search)

  const filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category)

  const searchedProducts = search
    ? products.filter(product => product.title.includes(search))
    : filteredProducts

  return(
    <>
      <Category />
      <div className="shop">
        {searchedProducts.map(product =>
          <ProductCard key={product.id} product={product}/>
        )}
      </div>
    </>
  )
}

export default Shop