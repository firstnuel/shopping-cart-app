import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import cartIcon from '../assets/cartIcon.png'

const Cart = () => {
    const cartItems = useSelector(state => state.cart)

    if (cartItems.length < 1) return (
        <div className="empty-cart-container">
            <div className="empty-cart-message">Shopping  Cart is Empty</div>
            <Link to={'/shop'}>
                <button className="emp-btn">Explore Shop
                <img className='add-cart-btn-img' src={cartIcon} alt="" />
                </button>
            </Link>
        </div>
    )

    return(
        <div className="cart-container">
            {cartItems.map((item, i) => 
                <CartItem key={i} item={item} />
            )}
            <div className="cart-total">
                <div>TOTAL:</div>
                <div>€ {
                    cartItems.reduce((acc,item) => acc + (item.price * item.qty), 0).toFixed(2)
                    }</div>
            </div>
        </div>
    )
}
export default Cart