import React from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom'
import GetSingleCoin from './components/GetSingleCoin'
import Trending from './components/Trending'
import HistoricalChart from './components/HistoricalChart'
function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route exact path='/trending-crypto' element={<Trending/>}/>
      <Route exact path='/:id/historical-chart' element={<HistoricalChart/>}/>
      <Route exact path='/' element={<MainPage/>}/>
      <Route exact path='/:id' element={<GetSingleCoin/>} />
    </Routes>
   </Router>
  )
}

export default App