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

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<MainPage/>} />
      <Route path='/trending-crypto' element = {<Trending/>} />
      <Route path='/:id' element = {<GetSingleCoin/>} />
      <Route path='/:id/historical-chart' element = {<HistoricalChart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App