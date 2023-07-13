import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
type marketDataType = {
  current_price : {
    inr : number
  }
  price_change_24h : number
  market_cap : {
    inr : number
  }
  market_cap_rank : number
}

type GetSingleCoin = {
  image : {large : string}
  name : string
  coingecko_rank : string
  description : {en : string}
  market_data : marketDataType
}

function GetSingleCoin() {
  const { id } = useParams();
  const [data, setData] = useState<GetSingleCoin>();

  const getData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='singleCryptoContainer'>
         <div className='left'>
        <img src={data?.image?.large} alt="" />
        <Link to={`historical-chart`}>Click to view Historical Charts</Link>
        </div>
        <div className='right'>
        <h2>Name : {data?.name}</h2>
        <h2>Coingecko Rank : {data?.coingecko_rank}</h2>
        <p>{data?.description?.en.substring(0,500)}</p>
        <h2>Current Price : ₹{data?.market_data?.current_price?.inr}</h2>
        <h2>24h price Change : {data?.market_data?.price_change_24h}</h2>
        <h2>Market cap : ₹{data?.market_data?.market_cap?.inr}</h2>
        <h2>Market cap rank : {data?.market_data?.market_cap_rank}</h2>
        </div>
    </div>
    )
}

export default GetSingleCoin;
