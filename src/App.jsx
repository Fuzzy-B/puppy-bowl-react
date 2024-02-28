import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import Navbar from './components/Navbar'
 

function App() { 


  return (
    <> 
    <Navbar />
    <main> 
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/new-player' element={<NewPlayerForm />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </main>
    </>
  )
}

export default App
