import { useCart } from '../hooks/useCart.js'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Products.css'

export const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (

    <main className='products'>
      <ul>
        {products.map(item => {
          const isProductInCart = checkProductInCart(item)

          return (
            <li key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
              />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(item)
                      : addToCart(item)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />

                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
