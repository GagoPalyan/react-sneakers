function Drawer({ onCloseCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Basket
          <img
            className="cu-p"
            onClick={onCloseCart}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
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
              <b>360.00USD</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%:</span>
              <div></div>
              <b>18.00USD</b>
            </li>
          </ul>
          <button className="greenButton">
            checkout <img src="\img\arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
