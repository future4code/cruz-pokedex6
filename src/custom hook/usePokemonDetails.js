import {useState, useEffect} from 'react'
import axios from 'axios'

export const usePokemonDetails = async(name) =>{
    const [pokemonDetails, setPokemonDetails] = useState({})
    try{
        let detailsOfPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        setPokemonDetails(detailsOfPokemon)
    }catch(error){
        alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue sua aventura para se tornar um Mestre Pokemon!')
    }
    return pokemonDetails
}