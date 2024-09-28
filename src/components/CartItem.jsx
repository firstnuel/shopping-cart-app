import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCartItem, updateCart } from "../reducers/cartReducer"

const CartItem = ({ item }) => {
    const [qty, setQty] = useState(item.qty)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart)

    const handleChange = (e) => setQty(Number(e.target.value)) 

    const handleAdd = () => {
        const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
        const updatedItem = { ...item, qty: cartItems[index].qty + 1 } 
        dispatch(updateCart({
            idx: index,
            item: updatedItem
        }))
        setQty(updatedItem.qty) 
    }

    const handleSub = () => {
        if (qty > 1) {
            const index = cartItems.findIndex(cartItem => cartItem.id === item.id)
            const updatedItem = { ...item, qty: cartItems[index].qty - 1 } 
            dispatch(updateCart({
                idx: index,
                item: updatedItem
            }))
            setQty(updatedItem.qty) 
        } else {
            dispatch(deleteCartItem(item)) 
        }
    }

    return (
        <div className="cart-item">
            <img src={item.image} alt="" className="item-img" />
            <div className="item-details">
                <div className="item-name">
                    {item.title.length > 40 ? item.title.slice(0, 40) + '...' : item.title}
                </div>
                <div className="item-count">
                    <button onClick={handleAdd}>+</button>
                    <input 
                        type="text"
                        value={qty}
                        onChange={handleChange}
                    />
                    <button onClick={handleSub}>-</button>
                </div>
                <div className="item-price">€ {item.price.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default CartItem
