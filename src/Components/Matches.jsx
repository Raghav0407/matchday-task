
import React, { useState, useEffect } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import './Matches.css';
import Crown from "./images/crown.png";
import Flag from "./images/flag.svg";
import Logo from "./images/logo.png";
function Matches() {


  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [text, setText] = useState("");

  // const search=()=>{

  // }
  const fetchData = (setItems, items) => {
    axios.get(`https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`, {
      headers: {
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }).then((res) => {
      let data = res.data.fixtures;
      setItems([...items, ...data]);
      setPage(page + 1);
      setHasMore(res.data.hasMorePage);
    })
  }
  useEffect(() => {
    fetchData(setItems, items);
  },)

  return (
    <div>
      <header>International Matches</header>
      <input onChange={(event) => {
        setText(event.currentTarget.value)
      }} id="enter" type="text" placeholder=" &#128270; Search for matches" value={text} />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >

        {items.map((user) => {
          return (
            <div className='main'>
              <a style={{ textDecoration: "none" }} ><div className="card">
                <p className="head1">All Senior Ranking Badminton Tournament</p>
                <span className="type">Final</span>
                <div className='between'>
                  <div className='first'>
                    <img src={Crown} id="crown" />
                    <img src={Flag} id='flag' />
                    <div className='firstname'>{user.team1[0].name}</div>
                  </div>
                  <div className='second'>
                    <div className='versus'>V/S</div>
                    <div className='score'>
                      {user.a1}-{user.b1},{user.a2}-{user.b2},{user.a3}-{user.b3}
                    </div>
                    <img src={Logo} id='logo' />
                  </div>
                  <div className='third'>
                    <img src={Flag} id='flag' />
                    <div className='firstname'>{user.team2[0].name}</div>
                  </div>
                </div>
              </div></a>
            </div>
          )

        })}
      </InfiniteScroll>
    </div>
  );
}

export default Matches;
