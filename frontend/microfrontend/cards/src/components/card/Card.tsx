import {TCard} from "../../storeCards";
import './styles/card.css'

export function Card({ card, onCardClick, onCardLike, onCardDelete }: { card: TCard, onCardClick: (card: TCard) => void, onCardLike: (card: TCard) => void, onCardDelete: (card: TCard) => void }) {
    const cardStyle = { backgroundImage: `url(${card.link})` };

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    const currentUser = { _id: null} // FIXME React.useContext(CurrentUserContext);

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

    const isOwn = true // FIXME card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
    );

    return (
        <li className="places__item card">
            <div className="card__image" style={cardStyle} onClick={handleClick} />

            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} />

            <div className="card__description">
                <h2 className="card__title">
                    {card.name}
                </h2>
                <div className="card__likes">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="card__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}