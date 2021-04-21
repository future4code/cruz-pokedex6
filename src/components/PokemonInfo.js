import React, { Component } from 'react'
import styled from 'styled-components'


const GridArea = styled.div`
width: 100%;
height: 80vh;
background-color: brown;
display: grid;
grid-template-columns:  2% 30% 30% 30% 2%;
grid-template-rows: 5% repeat(4,20%)  5%;
grid-gap: 2%;
justify-items: left;
`

const BoxPicture1 = styled.div`
background-color: yellow;
display: grid;
grid-column: 2/3;
grid-row: 3/4;
width: 50%;
`

const BoxPicture2 = styled.div`
background-color: blue;
display: grid;
grid-column: 2/3;
grid-row: 4/5;
width:50%;
`
const BoxPower = styled.div`
background-color: pink;
display: grid;
grid-column: 3/4;
grid-row: 2/6;
width: 100%;
`

const BoxType = styled.div`
background-color: red;
display: grid;
grid-column: 4/5;
grid-row: 2/3;
width:100%;
`

const BoxAttack = styled.div`
background-color: green;
display: grid;
grid-column: 4/5;
grid-row: 3/6;
width: 100%;

`


export const PokemonInfo = (props) =>{
    return <GridArea>
        <BoxPicture1>
            <img src={props.frontImage}/>
        </BoxPicture1>
        <BoxPicture2>
            <img src={props.backImage}/>
        </BoxPicture2>
        <BoxPower>
            <h1>Poderes</h1>
            <p><b>Pontos de vida: </b>{props.hp}</p>
            <p><b>Ataque: </b>{props.attack}</p>
            <p><b>Defesa: </b>{props.defense}</p>
            <p><b>Ataque especial: </b>{props.specialAttack}</p>
            <p><b>Defesa especial: </b>{props.specialDefense}</p>
            <p><b>Velocidade: </b>{props.speed}</p>
        </BoxPower>
        <BoxType>
            <h1>Tipo:</h1>
        </BoxType>
        <BoxAttack>
            <h1>Principais Ataques</h1>
        </BoxAttack>

    </GridArea>
}