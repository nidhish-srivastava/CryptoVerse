import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { apiDataType } from './MainPage/MainPage'
import LazyImage from './LazyImage'

function Trending() {
    const [trendingData,setTrendingData] = useState<apiDataType[]>([])
    const getData = async() =>{    
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h`)
        console.log(response.data)
        setTrendingData(response.data)
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <React.Fragment>
        <h2 style={{textAlign:'center'}}>Top 20 Trending Crypto Currencies</h2>
      <div className='mainContainer'>
        {trendingData.map((currEle,index)=>{
        const {image,name,id,price_change_24h} = currEle
            return(
                <Link to={`/${id}`}>
                <div key={index} className='card'>
                  <h2>{index+1}</h2>
                  <LazyImage image={image} />
                  {/* <img src={image} alt="" width='100px' /> */}
                  <div className="details">
                  <h2>{name}</h2>
                  <h3>Price Change in 24h:{price_change_24h}</h3>
                  </div>
                  </div>
                </Link>
            )
        })}
    </div>
            </React.Fragment>
  )
}

export default Trending