import React, {useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../PagesNavigation/Coordinator'
import { HeaderContainer, StyledButton, Title, Logo, Menu, HomeContainer } from '../components/style'
import Button from '@material-ui/core/Button'
import MediaCard from '../components/MediaCard'
import Drawer from '@material-ui/core/Drawer'
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {GlobalContext} from '../global/GlobalContext'

export default function PokedexPage() {
    const [menu, setMenu] = useState(false)
    const { pokemonsList, setPokemonsList, pokedex, setPokedex, listFromAPI, setListFromAPI } = useContext(GlobalContext)
    const history = useHistory()

    // useEffect(()=>{
    //     let newPokemonsList = []
    //     listFromAPI.forEach((itemFromAPI)=>{
    //         if(pokemonsList.indexOf(itemFromAPI)>-1){
    //             newPokemonsList.push(itemFromAPI)
    //         }
    //     })
    //     setPokemonsList(newPokemonsList)
    // }, [pokemonsList])

    const removeFromPokedex = (name) =>{
        let newPokemonsList = [...pokemonsList]
        pokedex.forEach((pokemon)=>{
            if(pokemon.name===name){
                newPokemonsList.push(pokemon)
            }
        })
        let newPokedex = pokedex.filter((pokemon)=>{
            return pokemon.name!==name
        })
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }

    return <div>
        <HeaderContainer>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(false) }}>
                <Menu>
                    <StyledButton color="primary" variant="contained" onClick={() => goToHome(history)}>Lista de Pokemons</StyledButton>
                </Menu>
            </Drawer>
            <IconButton color='primary' variant='contained' onClick={()=>{setMenu(true)}}>< MenuIcon/></IconButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo" />
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
        <HomeContainer>
        {pokedex.map((pokemon)=>{
                return <MediaCard 
                url={pokemon.url}
                pageFunction = {()=>removeFromPokedex(pokemon.name)}
                buttonFunction={'Remover Pokemon'}
                checkPokemonDetails = {()=>{history.push(`/details/${pokemon.name}`)}}
                />
            })}
        </HomeContainer>
    </div>
}