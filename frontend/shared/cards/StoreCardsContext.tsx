import * as React from 'react'
import { createRegisteredContext } from 'react-singleton-context';

export type TStoreCards = ReturnType<typeof useStoreCardsState>

export const StoreCardsContext = createRegisteredContext<TStoreCards>(
    '@cards/store',
    null
);

export function useStoreCards() {
    return {
        storeCards: React.useContext(StoreCardsContext)
    }
}

 export function useStoreCardsState() {
    const [cards, setCards] = React.useState<Array<Record<string, any>>>([]);
    const [selectedCard, setSelectedCard] = React.useState<null | string>(null);
    return {
        storeCardsState: React.useMemo(() => ({cards, setCards,
            selectedCard, setSelectedCard}), [cards, setCards,
            selectedCard, setSelectedCard])

    }
}
