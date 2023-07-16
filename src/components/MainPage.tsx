import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export type apiDataType = {
  image : string
  name : string
  id : string
  current_price : number 
  price_change_24h : string
}

function MainPage() {
  const [searchInput,setSearchInput] = useState("")
  const [apiData,setApiData] = useState<apiDataType[]>([])
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredResults,setFilteredResults]=  useState<apiDataType[]>([])

  const getData = async()=>{
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=50&page=${pageNumber}`
    )
    console.log(response.data);
    setApiData(response.data)
  }

  useEffect(()=>{
     getData()
  },[pageNumber])
  
  const searchItems = (input : string) =>{
      setSearchInput(input)
      const final = apiData.filter(item=>(
        Object.values(item).join().toLowerCase().includes(searchInput.toLowerCase())
      ))
      console.log(final);
      setFilteredResults(final)
  }

   //* Total pages button feature
   let pagNumberArray = [];
   for (let i = 1; i <= Math.ceil(250 / 50); i++) {
     pagNumberArray.push(i);
   }
  return (
    <React.Fragment>
     <div className="searchBarContainer">
        <h2>List of top 250 CryptoCurrencies</h2>
        <input
        autoFocus = {true}
          type="search"
          value={searchInput}
          onChange={(e) => searchItems(e.target.value)}
          className="searchBar"
        />
      </div> 

      <div className="mainContainer">
        {searchInput.length > 1
          ? filteredResults.map((currEle, index) => {
              const { image, name, id, current_price } = currEle;
              return (
                <Link to={`/${id}`}>
                  <div key={index} className="card">
                    {/* <h2>{index+1}</h2> */}
                    <img src={image} alt="" width="100px" />
                    <div className="details">
                      <h2>{name}</h2>
                      <h3>Current Price:₹{current_price}</h3>
                    </div>
                  </div>
                </Link>
              );
            })
          : apiData.map((currEle, index) => {
              const { image, name, id, current_price } = currEle;
              return (
                <Link to={`/${id}`}>
                  <div key={index} className="card">
                    {/* <h2>{index+1}</h2> */}
                    <img src={image} alt="" width="100px" />
                    <div className="details">
                      <h2>{name}</h2>
                      <h3>Current Price:₹{current_price}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>

      
      <div className="button-container">
        {pagNumberArray.map((e, index) => (
          <button key={index} onClick={() => setPageNumber(e)}>
            {e}
          </button>
        ))}
      </div>
    </React.Fragment>
  )
}

export default MainPage