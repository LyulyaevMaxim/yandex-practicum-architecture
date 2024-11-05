import { Card } from '../card/Card'
import {apiCards} from "../../api";
import {TCard, useStoreCards} from "../../storeCards";
import './styles/places.css'

function CardGrid() {
    const { storeCards} = useStoreCards()

    const { handleCardLike, handleCardDelete, handleCardSelect } = useCardActions()

    return <ul className="places__list">
        {storeCards.cards.map((card) => (
            <Card
                key={card._id}
                card={card}
                onCardClick={handleCardSelect}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
        ))}
    </ul>
}

function useCardActions() {
    const { storeCards} = useStoreCards()

    const currentUser = { _id: null} // TODO

    function handleCardLike(card: TCard) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        apiCards
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                storeCards.setCards((cards) =>
                    cards.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card: TCard) {
        apiCards
            .removeCard(card._id)
            .then(() => {
                storeCards.setCards((cards) => cards.filter((c) => c._id !== card._id));
            })
            .catch((err) => console.log(err));
    }

    function handleCardSelect(card: TCard) {
        storeCards.setSelectedCard(card['_id']);
    }

    return {
        handleCardLike,
        handleCardDelete,
        handleCardSelect
    }
}

export { CardGrid}