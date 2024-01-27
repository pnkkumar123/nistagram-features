import {Routes,Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Explore from './components/Explore'
import Search from './components/Search'
import Create from './components/Create'
import Message from './components/Message'
import Reel from './components/Reel'
import Notfication from './components/Notfication'

function App() {
 

  return (
    <>
      <Navigation/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/explore' element={<Explore/>}/>
         <Route path='/search' element={<Search/>}/>
         <Route path='/create' element={<Create/>}/>
         <Route path='/message' element={<Message/>}/>
         <Route path='/reel' element={<Reel/>}/>
         <Route path='/notfication' element={<Notfication/>}/>
      </Routes>
    </>
  )
}

export default App
