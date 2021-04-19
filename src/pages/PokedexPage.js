import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../PagesNavigation/Coordinator'
import { HeaderContainer, StyledButton, Title, Logo, Menu } from '../components/style'
import Button from '@material-ui/core/Button'
import MediaCard from '../components/MediaCard'
import Drawer from '@material-ui/core/Drawer'
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function PokedexPage() {
    const [menu, setMenu] = useState(false)
    const history = useHistory()
    return <div>
        <HeaderContainer>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(false) }}>
                <Menu>
                    <StyledButton color="primary" variant="contained" onClick={() => goToHome(history)}>Pokemons</StyledButton>
                </Menu>
            </Drawer>
            <IconButton color='primary' variant='contained' onClick={()=>{setMenu(true)}}>< MenuIcon/></IconButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo" />
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
    </div>
}