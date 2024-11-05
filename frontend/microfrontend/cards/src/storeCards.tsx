import * as React from 'react'
import { createRegisteredContext } from 'react-singleton-context';

// TODO move
type TUser = { _id?: string}

export type TCard = {
    _id: string
    name: string
    link: string
    owner: TUser
    likes: Array<TUser>
}

export type TStoreCards = ReturnType<typeof useStoreCardsState>

export const StoreCardsContext = createRegisteredContext<TStoreCards['storeCardsState']>(
    '@cards/store',
    null as unknown as TStoreCards['storeCardsState']
);

export function useStoreCards() {
    return {
        storeCards: React.useContext(StoreCardsContext)
    }
}

export function useStoreCardsState() {
    const [cards, setCards] = React.useState<Array<TCard>>([]);
    const [selectedCard, setSelectedCard] = React.useState<null | TCard['_id']>(null);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    return {
        storeCardsState: React.useMemo(() => ({
            cards, setCards,
            selectedCard, setSelectedCard,
            isAddPlacePopupOpen,
            setIsAddPlacePopupOpen
        }), [cards, setCards,
            selectedCard, setSelectedCard,
            isAddPlacePopupOpen, setIsAddPlacePopupOpen
        ])

    }
}
