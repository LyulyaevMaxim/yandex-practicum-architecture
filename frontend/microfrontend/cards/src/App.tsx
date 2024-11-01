import * as React from 'react'
import {useStoreCards} from "../../../shared/cards/StoreCardsContext";


function App() {
    const { storeCards} = useStoreCards()
    return (
        <>
            <h1 style={{color: 'red'}}>(Remote) Total cards: {storeCards.cards.length}</h1>
        </>
    )
}

export default App
