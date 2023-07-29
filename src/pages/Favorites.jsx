import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorite() {
  const { favorites, onAddToFavorite, onAddToCart } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex justify-between align-center">
        <h1>My favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onPlus={onAddToCart}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
