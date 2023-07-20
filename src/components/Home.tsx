import a from '../assets/1_wNsTGHUyuKHpqY9DrZDFYQ.webp'


function Home() {
  return (
    <div className="page-container">
    {/* <div className="page-container" style={toggleState ? {padding : "0 2rem 0 0"} : {padding : "2rem"}}> */}
        <div className="page-description">
        <div className="image-wrapper">
        <img src={a} alt="" />
        </div>
        <div className="right-side-home">
        <h1 className="home-page-heading" style={{wordBreak : "break-word"}}>CryptoVerse: Unleash the Power of Crypto Insights!</h1>
        <div className="para-container" style={{padding : '1rem'}} >
        <p>
        Dive into the captivating world of digital assets, where knowledge meets opportunity. Explore real-time data, create personalized portfolios, and stay ahead of the market trends.
        </p>
        <p>
        CryptoVerse is your gateway to unparalleled crypto analysis. Join us today and embark on an exhilarating journey to financial freedom in the digital realm!"
        </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home