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
import Interested from './components/Interested'
import AnalyseLater from './components/AnalyseLater'
import { apiDataType } from './components/MainPage'

function App() {
  const [toggleState,setToggleState]=  useState(false)
  const [interestedCrypto,setInterestedCrypto] = useState<apiDataType[]>([])
  const [analyseLater,setAnalyseLater] = useState<apiDataType[]>([])

  return (
    <BrowserRouter>
    <Header setToggleState = {setToggleState} toggleState = {toggleState} />
    <Routes>
      <Route path='/interested' element = {<Interested interestedCrypto = {interestedCrypto} />} />
      <Route path='/analyse-later' element = {<AnalyseLater analyseLater={analyseLater} />} />
      <Route path='/' element = {<Home/>} />
      <Route path='/top-250' element = {<MainPage setInterestedCrypto = {setInterestedCrypto} setAnalyseLater = {setAnalyseLater} />} />
      <Route path='/trending-crypto' element = {<Trending/>} />
      <Route path='/:id' element = {<GetSingleCoin/>} />
      <Route path='/:id/historical-chart' element = {<HistoricalChart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App