import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import cartIcon from '../assets/cartIcon.png'
import { Link } from 'react-router-dom'


const Home = () => {

  const typedElement = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['What are you looking for today?', 'Explore our collection and find the perfect product for you.'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <Link to={'/shop'}>
        <button className="cta-btn">Explore Shop
          <img className='add-cart-btn-img' src={cartIcon} alt="" />
        </button>
      </Link>

      <div className="homepage">
        <div className="homepage-text">
          {/* Element where the typed.js animation will be rendered */}
          <span className="page-text" ref={typedElement}></span>
        </div>
      </div>

    </div>
  )
}

export default Home
