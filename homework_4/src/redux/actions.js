import { types } from "./types"

function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function addPokemonAction(pokemon) {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(pokemon)
        }
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/', options)

        if (response.status >= 200 || response.status <= 204) {
            dispatch(preloaderOff())
            alert("Покемон успешно создан")
        }
    }
}