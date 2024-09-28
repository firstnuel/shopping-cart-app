import cartIcon from '../assets/cartIcon.png'
import cartReducer from '../reducers/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, addToCart } from '../reducers/cartReducer'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const addCart = () => {
    const index = cart.findIndex(item => item.id === product.id)

    if (index !== -1) {
      const updatedProduct = {
        ...product,
        qty: cart[index].qty + 1
      }
      dispatch(updateCart({
        idx: index,
        item: updatedProduct
      }))
    } else {
      dispatch(addToCart({ ...product, qty: 1 }))
    }
  }

  return(
    <div className="card">
      <img src={product.image} className="card-img" />
      <div className="card-name">
        {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
      </div>
      <div className="price-div">
        <div className="price">€ {product.price.toFixed(2)}</div>
        <div className="add-cart">
          <button className="add-cart-btn" onClick={addCart}>
            <img className='add-cart-btn-img' src={cartIcon} alt="" />
                        Add to cart
          </button></div>
      </div>
    </div>
  )
}

export default ProductCard