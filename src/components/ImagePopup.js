import React from "react";

function ImagePopup({ card, onClose }) {
  if (card.name !== undefined) {
    return (
      <article className="popup popup_big-image popup_opened">
        <div className="popup__container popup__container_big-image">
          <button onClick={onClose} type="button" className="popup__close" />
          <img className="popup__image" src={card.link} alt={card.name} />
          <p className="popup__caption">{card.name}</p>
        </div>
      </article>
    );
  } else {
    return null;
  }
}

export default ImagePopup;
