import React from 'react'
import {
    GridArea,
    BoxPicture1,
    BoxPicture2,
    BoxPicture3,
    BoxPicture4,
    BoxPower,
    BoxType,
    BoxAttack,
    TituloCard,
    BoxPokemonName,
    PokemonName,
    ItemCard,
    H1
} from './style'


export const PokemonInfo = (props) => {
    return (
        <GridArea>
            <BoxPokemonName>
                <PokemonName>
                    {props.name}
                </PokemonName>
            </BoxPokemonName>
            <BoxPicture1>
                <img 
                src={props.frontImage} 
                alt={`Imagem frontal do ${props.name}`}
                />
            </BoxPicture1>
            <BoxPicture2>
                <img 
                src={props.backImage} 
                alt={`Imagem traseira do ${props.name}`}
                />
            </BoxPicture2>
            <BoxPicture3>
                <img 
                src={props.frontShiny} 
                alt={`Imagem frontal brilhante do ${props.name}`}
                />
            </BoxPicture3>
            <BoxPicture4>
                <img 
                src={props.backShiny} 
                alt={`Imagem traseira brilhante do ${props.name}`}
                />
            </BoxPicture4>
            <BoxPower>
                <TituloCard>
                    <H1>Poderes</H1>
                </TituloCard>
                <ItemCard>
                    <p><b>Pontos de vida: </b>{props.hp}</p>
                    <p><b>Ataque: </b>{props.attack}</p>
                    <p><b>Defesa: </b>{props.defense}</p>
                    <p><b>Ataque especial: </b>{props.specialAttack}</p>
                    <p><b>Defesa especial: </b>{props.specialDefense}</p>
                    <p><b>Velocidade: </b>{props.speed}</p>
                </ItemCard>
            </BoxPower>
            <BoxType>
                <TituloCard>
                    <H1>Tipo: </H1>
                    <ItemCard>
                        <b>{props.type}</b>
                    </ItemCard>
                </TituloCard>
            </BoxType>
            <BoxAttack>
                <TituloCard>
                    <H1>Principais Ataques:</H1>
                </TituloCard>
                <ItemCard>
                    <p><b>{props.mainMoveA}</b></p>
                    <p><b>{props.mainMoveB}</b></p>
                    <p><b>{props.mainMoveC}</b></p>
                    <p><b>{props.mainMoveD}</b></p>
                    <p><b>{props.mainMoveE}</b></p>
                </ItemCard>
            </BoxAttack>
        </GridArea>
    )
}