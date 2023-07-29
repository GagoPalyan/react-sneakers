import { useContext, useState } from "react";
import Info from "./info";
import AppContext from "../context";

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Basket
          <img
            className="cu-p"
            onClick={onClose}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj, index) => (
                <div key={index} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{
                      backgroundImage: `url(${obj.imageUrl})`,
                    }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex">
                    <p className="mr-5">{obj.title}</p>
                    <b>{obj.price}.00USD</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice}.00USD</b>
                </li>
                <li className="d-flex">
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{Math.floor((totalPrice / 100) * 5)}.00USD</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                checkout <img src="\img\arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Order is complete!" : "Drawer is empty"}
            description={
              isOrderComplete
                ? "Your order will be delivered to courier soon"
                : "Add at least one pair of sneakers to place an order"
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "./img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
