import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Drawer from '@material-ui/core/Drawer';
import {HeaderContainer, StyledButton, Logo, Title, Menu} from '../components/style'
import {goToPokedex} from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default function HomePage() {
    const [menu, setMenu] = useState(false);
    const history = useHistory()
    return <div>
        <Drawer anchor={'left'} open={menu} onClose={()=>{setMenu(false)}}>
            <Menu>
                <StyledButton color='primary' variant='contained' onClick={() => goToPokedex(history)}>Pokemons</StyledButton>
            </Menu>
        </Drawer>
        <HeaderContainer>
            <IconButton color='primary' variant='contained' onClick={()=>{setMenu(true)}}><MenuIcon /></IconButton>
            <div>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
                </div>
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
    </div>
}