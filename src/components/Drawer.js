function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Basket <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandAIRJORDAN1RETROHIOGVARSITYMAIZEGAMEROYAL-SAIL7FD2596-700_1_2048x2048.jpg?v=1682086199)",
              }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mr-5">WOMEN'S AIR JORDAN 1 RETRO HI OG</p>
              <b>180.00$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage:
                  "url(https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandAIRJORDAN1RETROHIOGVARSITYMAIZEGAMEROYAL-SAIL7FD2596-700_1_2048x2048.jpg?v=1682086199)",
              }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mr-5">WOMEN'S AIR JORDAN 1 RETRO HI OG</p>
              <b>180.00$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
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
