import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {goBack, goToPokedex} from '../PagesNavigation/Coordinator'
import {HeaderContainer, StyledButton, Title, Logo} from '../components/style'
import Button from '@material-ui/core/Button'
import pokebola from '../images/pokebola.png'

export default function PokemonDetailsPage(){
    const {id} = useParams()
    const history = useHistory()
    return <div>
        <HeaderContainer>
            <StyledButton color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</StyledButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
            <StyledButton color="primary" variant="contained" onClick={() => goToPokedex(history)}>Pokedex</StyledButton>
            <Logo src={pokebola} />
        </HeaderContainer>
    </div>
}