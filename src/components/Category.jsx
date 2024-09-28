import { useDispatch } from 'react-redux'
import { filterProducts } from '../reducers/categoryReducer'

const Category = () => {

  const dispatch = useDispatch()
  const clearFilter = () => dispatch(filterProducts('all'))
  const filterElectronics = () => dispatch(filterProducts('electronics'))
  const filterJewelery = () => dispatch(filterProducts('jewelery'))
  const filterMen = () => dispatch(filterProducts('men\'s clothing'))
  const filterWomen = () => dispatch(filterProducts('women\'s clothing'))

  return (
    <div className="category-div">
      <div className="category-list">
        <div className="cat-list" onClick={clearFilter}>All</div>
        <div className="cat-list" onClick={filterElectronics}>Electronics</div>
        <div className="cat-list" onClick={filterJewelery}>Jewelery</div>
        <div className="cat-list" onClick={filterMen}>Men</div>
        <div className="cat-list last" onClick={filterWomen}>Women</div>
      </div>
    </div>
  )
}

export default Category