import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="https://img.freepik.com/premium-vector/sneakers-logo_25327-267.jpg?w=2000"
            alt="Logotype"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best Sneakers shop</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            src="https://cdn.icon-icons.com/icons2/1744/PNG/512/3643737-cart-drop-shop-shopping-trolly_113425.png"
            alt="Cart"
          />
          <span>1250 USD</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="Favorite" />
          </Link>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
