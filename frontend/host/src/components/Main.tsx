import * as React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from "./PopupWithForm";
import {useStoreCards} from "app1/store";

const CardsApp = React.lazy(() => import('app1/cards-app').catch(() => <p>Не смогли загрузить</p>))

function Main({  onEditProfile, onEditAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { storeCards} = useStoreCards()

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={() => storeCards.setIsAddPlacePopupOpen(true)}></button>
      </section>
      <section className="places page__section">
          <React.Suspense fallback='Loading'>
              <CardsApp PopupWithForm={PopupWithForm} />
          </React.Suspense>
      </section>
    </main>
  );
}

export default Main;
