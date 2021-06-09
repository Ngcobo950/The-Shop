import CartItem from '../Cart/CartItem'; 
import { Wrapper } from './Cart.style';
import { CartItemType } from '../App';
import StripeCheckout from 'react-stripe-checkout';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id:number) => void;
};

function handleToken(items:any){
    console.log(items)
}

const handleClick = () => {
    alert("Payment done ....Thank you for shopping with us")
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items:CartItemType[]) =>
        items.reduce((ack:number, item) => ack + item.amount * item.price, 0)



    return(
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in Cart</p> : null}
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
            <h2>Total: R{calculateTotal(cartItems).toFixed(2)}</h2>
            <div><button onClick={handleClick}>Pay</button></div>
        
            {/* <div>
                <StripeCheckout stripeKey='pk_test_51IJLjyHypCSTKm5VbVYyTIK8nnNuvK9iPLxPwjjjx8FaMAzZuR5tuPbDPevldOvAd1coFa9M4hoq01ktTfSWKwIE00hdfGtcC0' token={handleToken} />
            </div> */}
        </Wrapper>
    )
}

export default Cart;