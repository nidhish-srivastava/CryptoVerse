import { Link } from "react-router-dom"
import { apiDataType } from "./MainPage/MainPage"
import LazyImage from "./LazyImage"

type InterestedPropTypes = {
  interestedCrypto : apiDataType[]
}


function Interested({interestedCrypto} :InterestedPropTypes ) {
  return (
    <div>
      <h2 style={{textAlign : "center"}}>List of Crypto's you are intersted in</h2>
      {interestedCrypto.map(e=>{
        return(
          <Link to={`/${e.id}`}>
         <div className="card">
          <LazyImage image={e.image} />
         {/* <img src={e.image} alt="" width="100px" /> */}
        <div className="details">
          <h2>{e.name}</h2>
          <h3>Current Price:₹{e.current_price}</h3>
        </div>
        </div>
          </Link>

        )
      }
      
      )
}
</div>
  )
}
export default Interested