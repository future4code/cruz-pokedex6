import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Drawer from '@material-ui/core/Drawer';
import { HeaderContainer, Logo, Title, Menu, MainContainer } from '../components/style'
import { goToPokedex, goBack } from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MediaCard from '../components/MediaCard'
import { GlobalContext } from '../global/GlobalContext'

export default function HomePage() {
    const [menu, setMenu] = useState(false);
    const { pokemonsList, setPokemonsList, pokedex, setPokedex } = useContext(GlobalContext)
    const history = useHistory()
    useEffect(() => {
        document.title = `Bem vindo à Pokedex!`
    }, [])

    const addToPokedex = (name) => {
        const newPokedex = [...pokedex]
        pokemonsList.forEach((pokemon) => {
            if (pokemon.name === name) {
                newPokedex.push(pokemon)
            }
        })
        const newPokemonsList = pokemonsList.filter((pokemon) => {
            return pokemon.name !== name
        })
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }

    return <div>
        <Drawer anchor={'left'} open={menu} onClose={() => { setMenu(false) }}>
            <Menu>
                <Button color='primary' variant='contained' onClick={() => goToPokedex(history)}>Minha Pokedex</Button>
                <Button color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</Button>
            </Menu>
        </Drawer>
        <HeaderContainer>
            <IconButton color='primary' variant='contained' onClick={() => { setMenu(true) }}><MenuIcon /></IconButton>
            <div>
                <Title
                    src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"
                    alt="logo" />
            </div>
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
        <MainContainer>
            {pokemonsList.map((pokemon) => {
                return <MediaCard
                    url={pokemon.url}
                    pageFunction={() => addToPokedex(pokemon.name)}
                    buttonFunction={'Adicionar Pokemon'}
                    checkPokemonDetails={() => { history.push(`/details/${pokemon.name}`) }}
                />
            })}
        </MainContainer>
    </div>
}