import { useState } from "react"
import { addPlayer } from "../API"
import { useNavigate } from "react-router-dom"


export default function NewPlayerForm() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [status, setStatus] = useState('field')
    const [teamId, setTeamId] = useState('682')


    async function handleSubmit(e) {
        e.preventDefault()

        const playerObject = {
            name: name,
            breed: breed,
            imageUrl: imageUrl,
            status: status,
            teamId: teamId

        }
        await addPlayer(playerObject)

        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Player</h1>
            <label>
                Name: <input name="name" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <label>
                Breed: <input name="breed" value={breed} onChange={(e)=> setBreed(e.target.value)} />
            </label>
            <label>
                Player Image URL: <input name="imageUrl" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} />
            </label>
            <label>
                Status: <select name="status" onChange={(e)=> setStatus(e.target.value)}>
                    <option value="field" >Field</option>
                    <option value="bench">Bench</option> 
                </select>
            </label>
            <label>
            Team:
                <select name="teamId" onChange={(e)=> setTeamId(e.target.value)}>
                    <option value="682">Team Ruff</option>
                    <option value="530">Team Fluff</option>
                    <option value="0">Free-Agent</option>
                </select>
            </label>
            <button type='submit'>Add Player</button>
        </form>
    )
}