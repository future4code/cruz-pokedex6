import {useState, useEffect} from 'react'
import axios from 'axios'

export const usePokemonDetails = async(url) =>{
    const [pokemon, setPokemon] = useState({})
    try{
        let detailsOfPokemon = await axios.get(url)
        setPokemon(detailsOfPokemon.data)
    }catch(error){
        alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue sua aventura para se tornar um Mestre Pokemon!')
    }
    return pokemon
}