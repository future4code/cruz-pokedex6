import React, { useState, useEffect } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from 'axios'

export default function PokemonProvider(props) {
    const [listFromAPI, setListFromAPI] = useState([])
    const [pokemonsList, setPokemonsList] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokemonsFromAPI()
    }, [])

    useEffect(() => {
        console.log(listFromAPI)
        setPokemonsList(listFromAPI)
    }, [listFromAPI])

    const getPokemonsFromAPI = async () => {
        try {
            let listOfPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
            setListFromAPI(listOfPokemons.data.results)
        } catch (error) {
            alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue sua aventura para se tornar um Mestre Pokemon!')
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                pokemonsList,
                setPokemonsList,
                pokedex,
                setPokedex,
                listFromAPI
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}