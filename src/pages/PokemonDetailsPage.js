import React, {useState, useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {goBack, goToPokedex} from '../PagesNavigation/Coordinator'
import {HeaderContainer, StyledButton, Title, Logo} from '../components/style'
import axios from 'axios'
import {PokemonInfo} from '../components/PokemonInfo'
import Button from '@material-ui/core/Button'
import pokebola from '../images/pokebola.png'
import {GlobalContext} from '../global/GlobalContext'

export default function PokemonDetailsPage(){
    const {name} = useParams()
    const history = useHistory()
    const [pokemon, setPokemon] = useState({});
    const { pokemonsList, setPokemonsList, pokedex, setPokedex, listFromAPI, setListFromAPI } = useContext(GlobalContext)
    
    useEffect((()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
            console.log(res.data)
            setPokemon(res.data)
        })
    }),[]);

    // useEffect(()=>{
    //     let newPokemonsList = []
    //     listFromAPI.forEach((itemFromAPI)=>{
    //         if(pokemonsList.indexOf(itemFromAPI)>-1){
    //             newPokemonsList.push(itemFromAPI)
    //         }
    //     })
    //     setPokemonsList(newPokemonsList)
    // }, [pokemonsList])

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

    const addOrRemove = (name) =>{
        let listOfNames = pokemonsList.map((pokemon)=>{
            return pokemon.name
        })
        if(listOfNames.indexOf(name)>-1){
            addToPokedex(name)
        } else{
            removeFromPokedex(name)
        }
    }

    return <div>
        <HeaderContainer>
            <StyledButton color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</StyledButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo"/>
            <StyledButton color="primary" variant="contained" onClick={() => addOrRemove(pokemon.name)}>Adicionar/Remover</StyledButton>
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
            mainMoveA={pokemon.moves[0].move.name}
            mainMoveB={pokemon.moves[1].move.name}
            mainMoveC={pokemon.moves[2].move.name}
            mainMoveD={pokemon.moves[3].move.name}
            mainMoveE={pokemon.moves[4].move.name}
            />
        }
    </div>
}