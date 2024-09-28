import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { intializeProducts } from './reducers/productsReducer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './components/Shop'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(intializeProducts())
  }, [dispatch])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
