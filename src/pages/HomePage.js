import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Drawer from '@material-ui/core/Drawer';
import {HeaderContainer, StyledButton, Logo, Title, Menu, HomeContainer} from '../components/style'
import {goToPokedex} from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MediaCard from '../components/MediaCard'
import {GlobalContext} from '../global/GlobalContext'
import axios from 'axios'


export default function HomePage() {
    const [menu, setMenu] = useState(false);
    const {pokemonsList, setPokemonsList, pokedex, setPokedex} = useContext(GlobalContext)
    const history = useHistory()

    // useEffect(()=>{
    //     let updatedList = [...pokemonsList]
    //     pokedex.forEach((pokemonFromPokedex)=>{
    //         if(updatedList.indexOf(pokemonFromPokedex)>-1){
    //             updatedList.splice(pokemonFromPokedex, 1)
    //         }
    //     })
    //     setPokemonsList(updatedList)
    // }, [pokedex])

    const addToPokedex = (name) =>{
        let newPokedex = [...pokedex]
        pokemonsList.forEach((pokemon)=>{
            if(pokemon.name===name){
                newPokedex.push(pokemon)
            }
        })
        let newPokemonsList = pokemonsList.filter((pokemon)=>{
            return pokemon.name!==name
        })
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }
    
    return <div>
        <Drawer anchor={'left'} open={menu} onClose={()=>{setMenu(false)}}>
            <Menu>
                <StyledButton color='primary' variant='contained' onClick={() => goToPokedex(history)}>Minha Pokedex</StyledButton>
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
        <HomeContainer>
            {pokemonsList.map((pokemon)=>{
                return <MediaCard
                url={pokemon.url}
                pageFunction = {()=>addToPokedex(pokemon.name)}
                buttonFunction = {'Adicionar Pokemon'}
                checkPokemonDetails = {()=>{history.push(`/details/${pokemon.name}`)}}
                />
            })}
        </HomeContainer>
    </div>
}