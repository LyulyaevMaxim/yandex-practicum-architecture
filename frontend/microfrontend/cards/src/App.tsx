import * as React from 'react'
import {TCard, useStoreCards} from "./storeCards";
import {CardGrid} from "./components/CardGrid/CardGrid";
import { AddPlacePopup } from './components/AddPlacePopup'
import {apiCards} from "./api";

function WidgetCards({PopupWithForm}: { PopupWithForm: any }) {
    const { storeCards} = useStoreCards()

    React.useEffect(() => {
        apiCards
            .getCardList()
            .then(storeCards.setCards)
            .catch(console.log);
    }, []);

    function handleAddPlaceSubmit(newCard: TCard) {
        apiCards
            .addCard(newCard)
            .then((newCardFull) => {
                storeCards.setCards(prevCards => [newCardFull, ...prevCards]);
                modalAddPlaceClose();
            })
            .catch((err) => console.log(err));
    }

    function modalAddPlaceClose() {
        storeCards.setIsAddPlacePopupOpen(false)
    }

    return (
        <>
            <CardGrid />
            <AddPlacePopup
                    PopupWithForm={PopupWithForm}
                    isOpen={storeCards.isAddPlacePopupOpen}
                    onAddPlace={handleAddPlaceSubmit}
                    onClose={modalAddPlaceClose}
            />
        </>
    )
}

export default WidgetCards
