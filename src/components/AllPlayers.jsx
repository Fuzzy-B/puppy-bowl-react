import { useEffect, useState } from "react"
import { getAllPlayers } from "../API" 
import { useNavigate } from "react-router-dom"

export default function AllPlayers() {
    const navigate = useNavigate()
    const [players, setPlayers] = useState([]) 
    const [search, setSearch] = useState('')
 
    useEffect(()=> {
        async function updatePlayers(){
            try {
                const players = await getAllPlayers()
                setPlayers(players)
            } catch(err) {
                console.error(err)
            }
        }
        updatePlayers()
    }, [])
  
    function searchHandler(e) {
        setSearch(e.target.value)
    }

    let filteredPlayers = players
    if (search !== '') {
        filteredPlayers = players.filter((player)=> {
            const lowerCasePlayerName = player.name.toLowerCase()
            const lowerCaseSearch = search.toLowerCase()
            return lowerCasePlayerName.includes(lowerCaseSearch)
        })
    }
     

    return (
        <> 
            <section className="search-section">
                <h2>Search by Name:</h2>
                <input className="searchbar" name='search' onChange={searchHandler} />
            </section> 
        <main> 
            { 
            filteredPlayers.map((player)=> {
                return <article key={player.id} className="player-card"> 
                        <h2>{player.name}</h2>
                        <p>ID: {player.id}</p>
                        <img src={player.imageUrl} />
                        <button onClick={()=> navigate(`/players/${player.id}`)}>See details</button>
                </article>
            } 
            )}
        </main>
        </>
    )
}