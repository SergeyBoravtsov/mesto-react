function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardObj);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        onClick={handleClick}
        src={props.cardObj.link}
        alt={props.cardObj.name}
      />
      <button className="card__trash-button"></button>
      <div className="card__mesto">
        <h2 className="card__title">{props.cardObj.name}</h2>
        <div className="card__like-and-counter">
          <button type="button" className="card__like-button"></button>
          <p className="card__like-counter">{props.cardObj.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
