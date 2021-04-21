import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {goBack, goToPokedex} from '../PagesNavigation/Coordinator'
import {HeaderContainer, StyledButton, Title, Logo} from '../components/style'
import axios from 'axios'
import {PokemonInfo} from '../components/PokemonInfo'
import Button from '@material-ui/core/Button'
import pokebola from '../images/pokebola.png'

export default function PokemonDetailsPage(){
    const {name} = useParams()
    const history = useHistory()
    const [pokemon, setPokemon] = useState({});
    
    useEffect((()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
            console.log(res.data)
            setPokemon(res.data)
        })
    }),[]);

    return <div>
        <HeaderContainer>
            <StyledButton color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</StyledButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
            <StyledButton color="primary" variant="contained" onClick={() => goToPokedex(history)}>Pokedex</StyledButton>
            <Logo src={pokebola} />
        </HeaderContainer>
        {
            pokemon.stats &&
            <PokemonInfo
            frontImage={pokemon.sprites.front_default}
            backImage={pokemon.sprites.back_default}
            hp={pokemon.stats[0].base_stat}
            attack={pokemon.stats[1].base_stat}
            defense={pokemon.stats[2].base_stat}
            specialAttack={pokemon.stats[3].base_stat}
            specialDefense={pokemon.stats[4].base_stat}
            speed={pokemon.stats[5].base_stat}
            type={pokemon.types[0].type.name}
            />
        }
    </div>
}