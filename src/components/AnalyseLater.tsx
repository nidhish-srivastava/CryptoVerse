import { Link } from "react-router-dom"
import { apiDataType } from "./MainPage"
import LazyImage from "./LazyImage"

type AnalyseLaterPropsType = {
  analyseLater : apiDataType[]
}

function AnalyseLater({analyseLater} : AnalyseLaterPropsType) {
  return (
    <div>
        <h2 style={{textAlign : "center"}}>Analyse Later Lists</h2>
       {analyseLater.map(e=>{
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
export default AnalyseLater