import { useState } from 'react'
import searchIcon from '../assets/searchIcon.png'
import cartIcon from '../assets/orderBag.png'
import Logo from '../assets/shopper_transparent-.png'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../reducers/searchReducer'


const Navbar = ({ show=true }) => {
  const cart = useSelector(state => state.cart)
  const [searchVal, setSearchVal] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => setSearchVal(e.target.value)
  const handleHomePage = () => navigate('/')
  const handleShop = () => navigate('/shop')
  const handleCart =() => navigate('/shop/cart')

  const handleHome = () => {
    setSearchVal('')
    dispatch(searchProduct(''))
  }

  const handleClick = () => {
    dispatch(searchProduct(searchVal))
    navigate('/shop')
  }

  return (
    <div className="nav-bar">
      <Link to={'/'} onClick={handleHome}>
        <div className="nav-title">
          <img className="nav-title-img" src={Logo} alt="" />
        </div>
      </Link>

      {show && <div className="nav-search">
        <input type="text"
          value={searchVal}
          onChange={handleChange}
          placeholder="search product..."/>
        <img className="nav-search-img" src={searchIcon} alt="" onClick={handleClick}/>
      </div> }
      <div className="nav-cart">
        <div className="nav-home underline" onClick={handleHomePage}>Home</div>
        <div className="nav-shop underline" onClick={handleShop}>Shop</div>
        <div className="cart" onClick={handleCart}>
          <img className="nav-cart-img" src={cartIcon} alt="" />
          {cart.length >= 1 
          ? <div className="counter">{cart.length }</div>
          : null }
        </div>
      </div>
    </div>
  )
}

export default Navbar