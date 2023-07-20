import { Link } from "react-router-dom"
import LazyImage from "../LazyImage"
import { Suspense } from "react"
import { apiDataType } from "./MainPage"


function FilteredResultsCard({index,id,image,name,current_price} : apiDataType) {
  return (
    <Link to={`/${id}`} key={index}>
    <div className="card">
      <Suspense fallback={<h2>...</h2>}>
        <LazyImage image={image} />
      </Suspense>
      {/* <img src={image} alt="" width="100px" /> */}
      <div className="details">
        <h2>{name}</h2>
        <h3>Current Price:₹{current_price}</h3>
      </div>
    </div>
  </Link>
  )
}

export default FilteredResultsCard