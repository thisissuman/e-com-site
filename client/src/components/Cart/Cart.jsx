import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setshowcart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shoping Cart</span>
          <span className="close-btn" onClick={() => setshowcart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No Products In the Cart</span>
          <button className="return-btn">Return to Shop</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="sub-total">
              <span className="text">Subtotal</span>
              <span className="text total">1234</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
