import React, { useState, useEffect } from 'react'
import { BattleCardContainer } from './style'
import axios from 'axios'

export default function BattleCard(props) {

    const [pokemon, setPokemon] = useState({});
    useEffect((() => {
        axios.get(props.url).then((res) => {
            setPokemon(res.data)
        })
    }), [props.url]);
    return (
        <BattleCardContainer>
            <h3>{pokemon.name}</h3>
            {pokemon.sprites && pokemon.sprites.front_default && <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            />}
            <p><strong>PONTOS TOTAIS: </strong>{props.total}</p>
        </BattleCardContainer>
    )
}