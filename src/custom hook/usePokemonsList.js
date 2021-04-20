import {useState, useEffect} from 'react'
import axios from 'axios'

export const usePokemonsList = () =>{
    const [pokemonsList, setPokemonsList] = useState([])
    const [pokedex, setPokedex] = useState([])
    // const [pokemonsImages, setPokemonsImages] = useState([])
    
    useEffect(()=>{
        getPokemonsList()
        // getPokemonsImages()
    }, [])

    const addToPokedex = (name) =>{
        const newPokedex = [...pokedex]
        const addedPokemon = {}
        pokemonsList.forEach((pokemon)=>{
            if(pokemon.name===name){
                addedPokemon=pokemon
            }
        })
        const newPokemonsList = pokemonsList.filter((pokemon)=>{
            return pokemon.name===name
        })
        newPokedex.push(addedPokemon)
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }

    const removeFromPokedex = (name) =>{
        const newPokemonsList = [...pokemonsList]
        const removedPokemon = {}
        pokedex.forEach((pokemon)=>{
            if(pokemon.name===name){
                removedPokemon=pokemon
            }
        })
        const newPokedex = pokedex.filter((pokemon)=>{
            return pokemon.name===name
        })
        newPokemonsList.push(removedPokemon)
        setPokemonsList(newPokemonsList)
        setPokedex(newPokedex)
    }

    const getPokemonsList = async() =>{
        try{
            let listOfPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
            setPokemonsList(listOfPokemons.data.results)
        }catch(error){
            alert('Ops! Ocorreu um erro no sistema, mas já estamos trabalhando para que você continue sua aventura para se tornar um Mestre Pokemon!')
        }
    }

    // const getPokemonsImages = async() =>{
    //     pokemonsList.forEach((pokemon)=>{
    //         try{
    //             let infoOfPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
    //             let arrayOfImages = [...pokemonsImages]
    //             arrayOfImages.push(infoOfPokemon.data.sprites.front_default)
    //             setPokemonsImages(arrayOfImages)
    //         }catch(error){
    //             console.log(error)
    //         }
    //     })
    // }

    return [pokemonsList, setPokemonsList, pokedex, setPokedex, addToPokedex, removeFromPokedex]
}