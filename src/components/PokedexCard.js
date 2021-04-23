import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import axios from 'axios';

const StyledCard = styled(Card)`
  width: 200px;
  height: 300px;
  border: 1px  2px solid blue;
  box-shadow: 2px 4px 10px blue;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

const StyleCardContent = styled(CardContent)`
  width:80%;
  height:60%;
  text-align: center;
  background-color:pink;
`
export default function PokedexCard(props) {
    const [pokemon, setPokemon] = useState({});
    useEffect((() => {
        axios.get(props.url).then((res) => {
            setPokemon(res.data)
        })
    }), [props.url]);

    return (
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    title={pokemon.name}
                />
                <StyleCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pokemon.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pokemon.sprites && pokemon.sprites.front_default && <img 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name}
                        />}
                    </Typography>
                </StyleCardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={props.pageFunction} variant="contained" size="small" color="primary" >
                    {props.buttonFunction}
                </Button>
                <Button onClick={props.checkPokemonDetails} variant="contained" size="small" color="primary">
                    Ver Detalhes
        </Button>
            </CardActions>
            <Button onClick={props.battle} variant="contained" size="big" color="primary">
                BATALHAR
        </Button>
        </StyledCard>
    );
}