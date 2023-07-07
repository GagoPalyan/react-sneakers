function Card(sneakersImg, sneakersName, sneakersPrice) {
  return (
    <div className="card">
      <div className="favorite">
        <img src="\img\unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={sneakersImg} alt="Sneakers" />
      <h5>{sneakersName}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{sneakersPrice + "$"}</b>
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
  );
}

export default Card;
