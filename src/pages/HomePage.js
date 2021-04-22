import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {usePokemonsList} from '../custom hook/usePokemonsList'
import Drawer from '@material-ui/core/Drawer';
import {HeaderContainer, StyledButton, Logo, Title, Menu, HomeContainer} from '../components/style'
import {goToPokedex} from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MediaCard from '../components/MediaCard'
import axios from 'axios'


export default function HomePage() {
    const [menu, setMenu] = useState(false);
    const [pokemonsList, setPokemonsList, getPokemonDetails] = usePokemonsList()
    const history = useHistory()

    // const pokemonImage = async(name) =>{
    //     try{
    //     let detailsOfPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    //     // let pokemonImage = await axios.get(`http://pokeapi.co/media/sprites/${name}/front_default`)
    //     return detailsOfPokemon.data.sprites.front_default
    //     // return pokemonImage.data
    //     }catch(error){
    //     console.log(error)
    //     }
    // }

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
        <HomeContainer>
            {pokemonsList.map((pokemon)=>{
                return <MediaCard 
                name={pokemon.name}
                url={pokemon.url}
                checkPokemonDetails = {()=>{history.push(`/details/${pokemon.name}`)}}
                // image={`${pokemon.url}/`}
                />
            })}
        </HomeContainer>
    </div>
}