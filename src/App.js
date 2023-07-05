function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="https://img.freepik.com/premium-vector/sneakers-logo_25327-267.jpg?w=2000"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best Sneakers shop</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={20}
              height={20}
              src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643737-cart-drop-shop-shopping-trolly_113425.png"
            />
            <span>1250 USD</span>
          </li>
          <li>
            <img
              width={20}
              height={20}
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandAIRJORDAN1RETROHIOGVARSITYMAIZEGAMEROYAL-SAIL7FD2596-700_1_2048x2048.jpg?v=1682086199"
              alt="Jordan"
            />
            <h5>WOMEN'S AIR JORDAN 1 RETRO HI OG</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>180.00$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWAIRJORDAN1RETROHIGHMEDIUMGREYBLACK-WHITE5DZ2523-001_1_2048x2048.jpg?v=1671721422"
              alt="Jordan"
            />
            <h5>WOMEN'S AIR JORDAN 1 RETRO HIGH</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>144.00$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWMNSAIRJORDAN2RETROWHTEVRSTYRED-BLK6.5DX4400-106_1_2048x2048.jpg?v=1672412632"
              alt="Jordan"
            />
            <h5>WOMEN'S AIR JORDAN 2 RETRO</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>160.00$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWMNSAIRJORDAN6RETROWHITEPUREPLATINUM-MINTFOAM6DQ4914-103_1_2048x2048.jpg?v=1670435330"
              alt="Jordan"
            />
            <h5>WOMEN'S AIR JORDAN 6 RETRO</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>200.00$</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg"
                  alt="Plus"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
