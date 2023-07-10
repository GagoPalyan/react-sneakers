import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://64a9d6c58b9afaf4844b1aa4.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="\img\search.svg" alt="search"></img>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log("you press on Favorite button")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
