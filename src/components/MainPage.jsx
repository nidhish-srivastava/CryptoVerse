import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { Link } from 'react-router-dom'

function MainPage() {
  const [filteredResults,setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [apiData,setapiData] = useState([])
  const [loading,setLoading] = useState(false)
  const [pageNumber,setPageNumber] = useState(1)

   const getData = async() =>{
    setLoading(true)
  // const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list?include_platform=true`)
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=50&page=${pageNumber}`)
    console.log(response.data)
    setapiData(response.data)
    setLoading(false)
  }

// WE could have used debouncing,but we created a more better way where we conditionally render a newly created array
  useEffect(()=>{
    getData()
  },[pageNumber])

  if(loading){
    return <Loader/>
  }

//* PROBLEM --> THIS SEARCH FEATURE SHUD BE APPLIED TO ALL THE 5 PAGES,but it applies to current page

// * Since we are applying the search filter to the array of the page that we are in,

//* SOLUTION IDEA  --> WE MAKE A BIG ARRAY OF ALL THE DATA,search in that of 250,not in that of 50 each

  //* Searching feature
  const searchItems = (searchValue) =>{
    setSearchInput(searchValue)
    // if(searchInput!==''){  //* NO NEED OF THIS COZ I M USING TERNARY IN THE main return statement
    const final = apiData.filter((item)=>{   // Here the input item is an object(since each index of our array is made of objects so)
      // Converting array to string then to lowercase,then checking wether
      // Object.values will return an array of strings(not of objects)
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase()) 
    })
    // Storing the above inide a variable,passing the variable to our filteredArrayState
    console.log(final)
    setFilteredResults(final)
  }

  
  //* Total pages button feature
  let pagNumberArray = []
  for(let i=1;i<=Math.ceil(250/50);i++){
     pagNumberArray.push(i)
  }


  return (
    <React.Fragment>
       <div className='searchBarContainer'>
      <h2>List of top 250 CryptoCurrencies</h2>
    <input type="search" onChange={(e)=>searchItems(e.target.value)} className='searchBar' />
      </div>
    <div className='mainContainer'>
    {searchInput.length>1 ? ( 
      filteredResults.map((currEle,index)=>{
         const {image,name,id,current_price} = currEle
        return(
          <Link to={`/${id}`}>
          <div key={index} className='card'>
            {/* <h2>{index+1}</h2> */}
            <img src={image} alt="" width='100px' />
            <div className="details">
            <h2>{name}</h2>
            <h3>Current Price:₹{current_price}</h3>
            </div>
            </div>
          </Link>
        )
      })
      
      ) :
      
    (
      apiData.map((currEle,index)=>{
         const {image,name,id,current_price} = currEle
        return(
          <Link to={`/${id}`}>
          <div key={index} className='card'>
            {/* <h2>{index+1}</h2> */}
            <img src={image} alt="" width='100px' />
            <div className="details">
            <h2>{name}</h2>
            <h3>Current Price:₹{current_price}</h3>
            </div>
            </div>
          </Link>
      )
    }))}
    </div> 

     <div className="button-container">
      {pagNumberArray.map((e,index)=>(
        <button key={index} onClick={()=>setPageNumber(e)}>{e}</button>
      ))}
    </div>
    </React.Fragment>
  )
}

export default MainPage