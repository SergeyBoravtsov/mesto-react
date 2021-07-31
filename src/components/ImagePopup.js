function ImagePopup(props) {
  if (props.card !== {}) {
    return (
      <article
        className={`popup popup_big-image ${
          props.card.name !== undefined ? "popup_opened" : ""
        }`}
      >
        <div className="popup__container popup__container_big-image">
          <button
            onClick={props.onClose}
            type="button"
            className="popup__close"
          ></button>
          <img
            className="popup__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="popup__caption">{props.card.name}</p>
        </div>
      </article>
    );
  }
}

export default ImagePopup;
