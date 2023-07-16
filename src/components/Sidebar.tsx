import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="side-bar">
        <Link to={"/interested"}>Interested</Link>
        <Link to={"/analyse-later"}>Analyst Later</Link>
    </div>
  )
}

export default Sidebar