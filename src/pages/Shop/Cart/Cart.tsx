import CartItem from '../CartItem/CartItem';
import { Wrapper } from './Cart.style';
import { CartItemType } from '../Shop';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeFromItemList: (id: number) => void;
}


const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart, removeFromItemList}) => {

  const calculateTotal = (items: CartItemType[]) => 
  items.reduce((acc: number, item) => acc + item.amount * item.price, 0)

  return(
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty now.</p>
      ) : (
        null
      )}
      {cartItems.map(item => (
        <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeFromItemList={removeFromItemList}/>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

export default Cart