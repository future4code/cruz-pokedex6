import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { goBack, goToPokedex, goToHome } from '../PagesNavigation/Coordinator'
import { HeaderContainer, Title, Logo, Menu } from '../components/style'
import axios from 'axios'
import { PokemonInfo } from '../components/PokemonInfo'
import Button from '@material-ui/core/Button'
import pokebola from '../images/pokebola.png'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GlobalContext } from '../global/GlobalContext'

export default function PokemonDetailsPage() {
    const [menu, setMenu] = useState(false);
    const { name } = useParams()
    const history = useHistory()
    const [pokemon, setPokemon] = useState({});
    const { pokemonsList, setPokemonsList, pokedex, setPokedex, listFromAPI } = useContext(GlobalContext)

    useEffect((() => {
        document.title = `Detalhes do ${name}`
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
            setPokemon(res.data)
        })
    }), []);

    const addToPokedex = (name) => {
        let newPokedex = [...pokedex]
        pokemonsList.forEach((pokemon) => {
            if (pokemon.name === name) {
                newPokedex.push(pokemon)
            }
        })
        let newPokemonsList = pokemonsList.filter((pokemon) => {
            return pokemon.name !== name
        })
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }

    const removeFromPokedex = (name) => {
        let newPokemonsList = [...pokemonsList]
        let orderedList = []
        pokedex.forEach((pokemon) => {
            if (pokemon.name === name) {
                newPokemonsList.push(pokemon)
            }
        })
        listFromAPI.forEach((itemFromAPI) => {
            if (newPokemonsList.indexOf(itemFromAPI) > -1) {
                orderedList.push(itemFromAPI)
            }
        })
        let newPokedex = pokedex.filter((pokemon) => {
            return pokemon.name !== name
        })
        setPokemonsList(orderedList)
        setPokedex(newPokedex)
    }

    const addOrRemove = (name) => {
        let listOfNames = pokemonsList.map((pokemon) => {
            return pokemon.name
        })
        if (listOfNames.indexOf(name) > -1) {
            addToPokedex(name)
        } else {
            removeFromPokedex(name)
        }
    }

    return <>
        <Drawer anchor={"left"} open={menu} onClose={() => { setMenu(false) }}>
            <Menu>
                <Button color="primary" variant="contained" onClick={() => addOrRemove(pokemon.name)}>Adicionar/Remover da Pokedex</Button>
                <Button color="primary" variant="contained" onClick={() => goToHome(history)}>Home</Button>
                <Button color="primary" variant="contained" onClick={() => goToPokedex(history)}>Minha Pokedex</Button>
                <Button color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</Button>
            </Menu>
        </Drawer>
        <HeaderContainer>
            <IconButton color='primary' variant='contained' onClick={() => { setMenu(true) }}><MenuIcon /></IconButton>
            <div>
                <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo" />
            </div>
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
        {
            pokemon.stats &&
            <PokemonInfo
                name={pokemon.name}
                frontImage={pokemon.sprites.front_default}
                backImage={pokemon.sprites.back_default}
                frontShiny={pokemon.sprites.front_shiny}
                backShiny={pokemon.sprites.back_shiny}
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
    </>
}