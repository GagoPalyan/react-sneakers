function Header(props) {
  return (
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
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
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
  );
}

export default Header;
