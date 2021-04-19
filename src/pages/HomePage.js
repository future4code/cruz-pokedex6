import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {HeaderContainer, StyledButton, Logo, Title} from '../components/style'
import {goToPokedex} from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'


export default function HomePage() {
    const history = useHistory()
    return <div>
        <HeaderContainer>
            <StyledButton color='primary' variant='contained' onClick={() => goToPokedex(history)}>Pokedex</StyledButton>
            <div>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
                </div>
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
    </div>
}