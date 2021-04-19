import React from 'react'
import {HeaderContainer} from './style'
import {goToHome} from '../PagesNavigation/Coordinator'
import {useHistory} from 'react-router-dom'

export default function Header(){
    const history = useHistory()
    return <HeaderContainer>
        <button onClick={()=>goToHome(history)}>Minha Pokedex</button>
        <h1>Header</h1>
        <p></p>
    </HeaderContainer>
}