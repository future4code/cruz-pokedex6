import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome, goBack } from '../PagesNavigation/Coordinator'
import { HeaderContainer, Title, Logo, Menu, MainContainer, BattleContainer, SecondPokemonContainer, H1 } from '../components/style'
import Button from '@material-ui/core/Button'
import PokedexCard from '../components/PokedexCard'
import BattleCard from '../components/BattleCard'
import Drawer from '@material-ui/core/Drawer'
import pokebola from '../images/pokebola.png'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios'
import { GlobalContext } from '../global/GlobalContext'

export default function PokedexPage() {
    const [menu, setMenu] = useState(false)
    const [battleArray, setBattleArray] = useState([])
    const [totalPoints, setTotalPoints] = useState([])
    const { pokemonsList, setPokemonsList, pokedex, setPokedex, listFromAPI } = useContext(GlobalContext)
    const history = useHistory()
    useEffect(() => {
        document.title = `Minha Pokedex!`
    }, [])

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

    const battle = (pokemon) => {
        switch (battleArray.length) {
            case (2):
                alert('A batalha só pode ocorrer entre dois pokemons. Encerre a batalha atual antes de continuar.')
                break
            case (0):
                let firstPokemon = [...battleArray]
                axios.get(pokemon.url).then((res) => {
                    let firstPokemonPoints = [...totalPoints]
                    firstPokemonPoints.push(0)
                    res.data.stats.forEach((skill) => {
                        firstPokemonPoints[0] += skill.base_stat
                    })
                    setTotalPoints(firstPokemonPoints)
                })
                firstPokemon.push(pokemon)
                setBattleArray(firstPokemon)
                break
            case (1):
                let secondPokemon = [...battleArray]
                axios.get(pokemon.url).then((res) => {
                    let secondPokemonPoints = [...totalPoints]
                    secondPokemonPoints.push(0)
                    res.data.stats.forEach((skill) => {
                        secondPokemonPoints[1] += skill.base_stat
                    })
                    setTotalPoints(secondPokemonPoints)
                })
                secondPokemon.push(pokemon)
                setBattleArray(secondPokemon)
                break
            default: break
        }

    }

    const finishBattle = () => {
        setBattleArray([])
        setTotalPoints([])
    }

    return <div>
        <HeaderContainer>
            <Drawer anchor="left" open={menu} onClose={() => { setMenu(false) }}>
                <Menu>
                    <Button color="primary" variant="contained" onClick={() => goToHome(history)}>Home</Button>
                    <Button color="primary" variant="contained" onClick={() => goBack(history)}>Voltar</Button>
                </Menu>
            </Drawer>
            <IconButton color='primary' variant='contained' onClick={() => { setMenu(true) }}>< MenuIcon /></IconButton>
            <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo" />
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
        <MainContainer>
            {pokedex.map((pokemon) => {
                return <PokedexCard
                    url={pokemon.url}
                    pageFunction={() => removeFromPokedex(pokemon.name)}
                    buttonFunction={'Remover Pokemon'}
                    checkPokemonDetails={() => { history.push(`/details/${pokemon.name}`) }}
                    battle={() => battle(pokemon)}
                />
            })}
        </MainContainer>
        {battleArray.length === 0 ?
            <div></div> :
            <BattleContainer>
                <H1>VAMOS BATALHAR!</H1>
                <h3>{!battleArray[1] ?
                    '' :
                    totalPoints[0] > totalPoints[1] ?
                        `${battleArray[0].name} venceu!` :
                        totalPoints[1] > totalPoints[0] ?
                            `${battleArray[1].name} venceu!` :
                            'EMPATE'}</h3>
                <Button onClick={finishBattle} variant="contained" size="small" color="primary">
                    Encerrar batalha
                </Button>
                <div>
                    {battleArray.map((pokemon) => {
                        if (battleArray.indexOf(pokemon) === 0) {
                            return <BattleCard
                                url={pokemon.url}
                                total={totalPoints[0]}
                            />
                        } else return <></>
                    })}
                    {battleArray.length === 1 ?
                        <div></div> :
                        <SecondPokemonContainer>
                            <h3>X</h3>
                            {battleArray.map((pokemon) => {
                                if (battleArray.indexOf(pokemon) === 1) {
                                    return <BattleCard
                                        url={pokemon.url}
                                        total={totalPoints[1]}
                                    />
                                } else return <></>
                            })}
                        </SecondPokemonContainer>
                    }
                </div>
            </BattleContainer>
        }
    </div>
}