import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="side-bar">
        <Link to={""}>Interested</Link>
        <Link to={""}>Analyst Later</Link>
    </div>
  )
}

export default Sidebar