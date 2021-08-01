import React from "react";

function ImagePopup(props) {
  if (props.card.name !== undefined) {
    return (
      <article className="popup popup_big-image popup_opened">
        <div className="popup__container popup__container_big-image">
          <button
            onClick={props.onClose}
            type="button"
            className="popup__close"
          />
          <img
            className="popup__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="popup__caption">{props.card.name}</p>
        </div>
      </article>
    );
  } else {
    return null;
  }
}

export default ImagePopup;
