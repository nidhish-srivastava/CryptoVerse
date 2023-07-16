import a from '../assets/1_wNsTGHUyuKHpqY9DrZDFYQ.webp'
import Sidebar from './Sidebar'

type HomePropTypes = {
  toggleState : boolean
}

function Home({toggleState} : HomePropTypes) {
  return (
    <div className="page-container" style={toggleState ? {padding : "0 2rem 0 0"} : {padding : "2rem"}}>
      {toggleState && <Sidebar/>}
        <div className="page-description">
        <h1 className="home-page-heading">CryptoVerse: Unleash the Power of Crypto Insights!</h1>
        <p>
        Dive into the captivating world of digital assets, where knowledge meets opportunity. Explore real-time data, create personalized portfolios, and stay ahead of the market trends.
        </p>
        <p>
        CryptoVerse is your gateway to unparalleled crypto analysis. Join us today and embark on an exhilarating journey to financial freedom in the digital realm!"
        </p>
        </div>
        <div className="image-wrapper">
        <img src={a} alt="" />
        </div>
    </div>
  )
}

export default Home