import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import MainPage from './components/MainPage'
import Trending from './components/Trending'
import GetSingleCoin from './components/GetSingleCoin'
import Header from './components/Header'
import HistoricalChart from './components/HistoricalChart'
import {useState} from 'react'
import Home from './components/Home'

function App() {
  const [toggleState,setToggleState]=  useState(false)

  return (
    <BrowserRouter>
    <Header setToggleState = {setToggleState} />
    <Routes>
      <Route path='/' element = {<Home toggleState = {toggleState} />} />
      <Route path='/top-250' element = {<MainPage/>} />
      <Route path='/trending-crypto' element = {<Trending/>} />
      <Route path='/:id' element = {<GetSingleCoin/>} />
      <Route path='/:id/historical-chart' element = {<HistoricalChart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App