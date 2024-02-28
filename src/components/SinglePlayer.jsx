import React, { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom" 
import { useState } from "react"
import { deletePlayer, getSinglePlayer } from "../API"


export default function SinglePlayer() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [player, setPlayer] = useState(null)

    useEffect(()=> {
        async function updatePlayer() {
        try {
            const player = await getSinglePlayer(id)
            setPlayer(player)
        }catch(err){
            console.error(err)
        }
    }
        updatePlayer()
    }, [])

    async function deleteHandler(playerId) {
        await deletePlayer(playerId)

        navigate('/')
    }

    if(!player) {
        return <h1>Loading player {id}. . .</h1>
    }

    let playerTeam = '' 
        if (player.teamId == 682) {
            playerTeam = 'Ruff'
        }
        if (player.teamId === 530) {
            playerTeam = 'Fluff'
        }
        if (player.teamId === 0) {
            playerTeam = 'Free-Agent'
        } 

    return (
        <main className="single-view-card"> 
            <article key={player.id} className="single-text">  
                <h1>{player.name}</h1>
                <p>Player ID #{player.id}</p>
                <p>{player.breed}</p>
                <p>Status: {player.status}</p>
                <p>Team: {playerTeam}</p>
                <button onClick={()=> navigate(`/`)}>Return to All Players</button>
                <button onClick={() => deleteHandler(player.id)}>Delete Player</button> 
                 
            </article>
            <img className="single-image" src={player.imageUrl} />
        </main>
    )
}