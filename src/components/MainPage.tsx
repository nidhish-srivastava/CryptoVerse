import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

export type apiDataType = {
  image: string;
  name: string;
  id: string;
  current_price: number;
  price_change_24h: string;
  market_cap_rank: number;
  hover?: boolean;
};

type MainPagePropTypes = {
  setInterestedCrypto: React.Dispatch<React.SetStateAction<apiDataType[]>>;
};

function MainPage({ setInterestedCrypto }: MainPagePropTypes) {
  const [searchInput, setSearchInput] = useState("");
  const [apiData, setApiData] = useState<apiDataType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredResults, setFilteredResults] = useState<apiDataType[]>([]);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=50&page=${pageNumber}`
    );
    console.log(response.data);
    setApiData(response.data);
  };

  useEffect(() => {
    getData();
  }, [pageNumber]);

  const searchItems = (input: string) => {
    setSearchInput(input);
    const final = apiData.filter((item) =>
      Object.values(item)
        .join()
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
    console.log(final);
    setFilteredResults(final);
  };

  //* Total pages button feature
  let pagNumberArray = [];
  for (let i = 1; i <= Math.ceil(250 / 50); i++) {
    pagNumberArray.push(i);
  }

  const onMouseEnter = (index: number) => {
    setApiData(
      apiData.map((e) => {
        if (e.market_cap_rank === index + 1) {
          if (!e.hover) e.hover = true;
          else e.hover = false;
          // console.log(e);
        }
        return e;
      })
    );
  };
  const onMouseLeaver = (index: number) => {
    setApiData(
      apiData.map((e) => {
        if (e.market_cap_rank === index + 1) {
          if (e.hover) e.hover = false;
          else e.hover = true;
          // console.log(e);
        }
        return e;
      })
    );
  };
  const clickOnCardHandler = (id: string) => {
    navigate(`/${id}`);
  };
  const clickedOnSpan = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal((e) => !e);
  };

  const favHandler = (currEle : apiDataType) => {
    setInterestedCrypto(e=>[...e,currEle])
    // navigate('/interested')
  }

  return (
    <React.Fragment>
      <div className="searchBarContainer">
        <h2>List of top 250 CryptoCurrencies</h2>
        <input
          autoFocus={true}
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
                <Link to={`/${id}`} key={index}>
                  <div className="card">
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
              const { image, name, id, current_price, hover } = currEle;
              return (
                <div onClick={() => clickOnCardHandler(id)} key={index}>
                  <div
                    className="card"
                    onMouseEnter={() => onMouseEnter(index)}
                    onMouseLeave={() => onMouseLeaver(index)}
                  >
                    {/* <div  className="card"  onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}> */}
                    {/* <h2>{index+1}</h2> */}
                    <img src={image} alt="" width="100px" />
                    <div className="details">
                      <h2>{name}</h2>
                      <h3>Current Price:₹{current_price}</h3>
                    </div>
                    {hover && (
                      <span className="three-dots" onClick={clickedOnSpan}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                        {showModal && (
                          <div className="modal-container">
                            <label onClick={()=>favHandler(currEle)}>Add to fav</label>
                            <label>Add to Analyst Later</label>
                          </div>
                        )}
                      </span>
                    )}
                  </div>
                </div>
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
  );
}

export default MainPage;
