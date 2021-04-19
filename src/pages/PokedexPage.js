import React from 'react'
import {useHistory} from 'react-router-dom'
import {goToHome} from '../PagesNavigation/Coordinator'
import {HeaderContainer, StyledButton, Title, Logo} from '../components/style'
import Button from '@material-ui/core/Button'
import pokebola from '../images/pokebola.png'

export default function PokedexPage(){
    const history = useHistory()
    return <div>
        <HeaderContainer>
            <StyledButton color="primary" variant="contained" onClick={() => goToHome(history)}>Pokemons</StyledButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
            <p></p>
            <Logo src={pokebola} /> 
        </HeaderContainer>
    </div>
}