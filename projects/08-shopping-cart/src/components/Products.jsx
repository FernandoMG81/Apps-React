import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.map(item => {
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
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
