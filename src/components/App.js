//import logo from '../logo.svg';
//import './App.css';
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="content">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          id="username"
          className="popup__input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="username-error" className="popup__error"></span>
        <input
          type="text"
          name="about"
          id="userabout"
          className="popup__input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="userabout-error" className="popup__error"></span>
        <button type="submit" name="save-profile" className="popup__button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          id="placename"
          className="popup__input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
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
          required
        />
        <span id="imagelink-error" className="popup__error"></span>
        <button type="submit" name="add-place" className="popup__button">
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="avatar"
          id="avatarlink"
          className="popup__input"
          placeholder="Ссылка на картинку"
          minLength="2"
          required
        />
        <span id="avatarlink-error" className="popup__error"></span>
        <button type="submit" name="save-avatar" className="popup__button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="confirm-card-deletion"
        title="Вы уверены?"
        onClose={closeAllPopups}
      >
        <button
          type="submit"
          id="confirm-delete-button"
          className="popup__button"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;
