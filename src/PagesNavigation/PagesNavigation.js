import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PokedexPage from '../pages/PokedexPage'
import PokemonDetailsPage from '../pages/PokemonDetailsPage'
import ErrorPage from '../pages/ErrorPage'

export default function PagesNavigation() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/pokedex">
                <PokedexPage />
            </Route>
            <Route exact path="/details/:name">
                <PokemonDetailsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    </BrowserRouter>
}