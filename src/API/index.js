import axios from "axios";

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/fuzzyb/players'



export async function getAllPlayers() {
    const { data } = await axios.get(BASE_URL)
    return data.data.players
}

export async function getSinglePlayer(playerId) {
    const { data } = await axios.get(BASE_URL+`/${playerId}`)
    return data.data.player
}

export async function addPlayer(player) {
    await axios.post(BASE_URL, player)
}

export async function deletePlayer(playerId) {
    await axios.delete(BASE_URL+`/${playerId}`)
}