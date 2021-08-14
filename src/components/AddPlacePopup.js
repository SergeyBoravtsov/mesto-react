import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        id="placename"
        className="popup__input"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleChangeName}
        required
      />
      <span id="placename-error" className="popup__error"></span>
      <input
        type="url"
        name="link"
        id="imagelink"
        className="popup__input"
        placeholder="Ссылка на картинку"
        minLength="2"
        value={link}
        onChange={handleChangeLink}
        required
      />
      <span id="imagelink-error" className="popup__error"></span>
      <button type="submit" name="add-place" className="popup__button">
        {isLoading ? "Сохранение..." : "Создать"}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
