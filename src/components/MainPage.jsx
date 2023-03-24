import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { Link } from 'react-router-dom'

function MainPage() {
  const [filteredResults,setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [apiData,setapiData] = useState([])
  const [loading,setLoading] = useState(true)

  const getData = async() =>{
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/`)
        console.log(response.data)
        setapiData(response.data)
        setLoading(false)
        

    } catch (error) {
      setLoading(false)
        console.log(error)
    }
  }


  useEffect(()=>{
    getData()
  },[])

  if(loading){
    return <Loader/>
  }

  const searchItems = (searchValue) =>{
    setSearchInput(searchValue)
    // if(searchInput!==''){  //* NO NEED OF THIS COZ I M USING TERNARY IN THE main return statement
    const final = apiData.filter((item)=>{   // Converting array to string then to lowercase,then checking wether
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase()) 
    })
    // Storing the above inide a variable,passing the variable to our filteredArrayState
    console.log(final)
    setFilteredResults(final)
  }


  return (
    <React.Fragment>
       <div className='searchBarContainer'>
      <h2>List of top 50 CryptoCurrencies</h2>
    <input type="search" onChange={(e)=>searchItems(e.target.value)} className='searchBar' />
      </div>
    <div className='mainContainer'>
    {searchInput.length>1 ? ( 
      filteredResults.map((currEle,index)=>{
        const {image,name,symbol,id,market_data} = currEle
        return(
          <Link to={`/${id}`}>
          <div key={index} className='card'>
            <h2>{index+1}</h2>
            <img src={image.large} alt="" width='100px' />
            <div className="details">
            <h2>{name}</h2>
            <h3>Current Price:₹{market_data.current_price?.inr}</h3>
            </div>
            </div>
          </Link>
        )
      })
      
      ) :
      
    (
      apiData.map((currEle,index)=>{
        const {image,name,symbol,id,market_data} = currEle
      return(
        <Link to={`/${id}`}>
        <div key={index} className='card'>
            <img src={image.large} alt="" width='100px' />
            <div className="details">
            <h2>{index+1}.</h2>
            <h2>{name}</h2>
            <h3>Current Price: ₹{market_data.current_price.inr}</h3>
            </div>
          </div>
        </Link>
      )
    }))}
    </div> 
    </React.Fragment>
  )
}

export default MainPage