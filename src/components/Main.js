import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getAllCards()]).then((result) => {
      setUserName(result[0].name);
      setUserDescription(result[0].about);
      setUserAvatar(result[0].avatar);
      setCards(result[1]);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <div
            onClick={props.onEditAvatar}
            className="profile__edit-avatar"
          ></div>
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__edit-button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              cardObj={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
