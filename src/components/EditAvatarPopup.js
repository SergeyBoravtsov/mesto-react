import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });

    avatarLinkRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="avatar"
        id="avatarlink"
        className="popup__input"
        placeholder="Ссылка на картинку"
        minLength="2"
        ref={avatarLinkRef}
        required
      />
      <span id="avatarlink-error" className="popup__error"></span>
      <button type="submit" name="save-avatar" className="popup__button">
        {isLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
