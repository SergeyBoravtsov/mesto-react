import React from "react";

function PopupWithForm(props) {
  return (
    <article
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close"
        ></button>
        <form
          className="popup__form"
          name={props.name}
          id={`${props.name}-form`}
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </article>
  );
}

export default PopupWithForm;
