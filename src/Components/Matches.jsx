
import React from 'react';
import './Matches.css';


function RenderingArrayOfObjects() {
   
   fetch("https://matchday.ai/referee/champ/fixture/dummy-matches?page=0")
   .then((response)=>{
    return response.json();
   })
   .then((data)=>{
    console.log(data);
   });
  

  const arr = [
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    },
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    },
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    },
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    },
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    },
    {
      "type": "Final",
      "firstname": "Kartikey Gulshan Kumar",
      "score": "9-21,21-10,21-15",
      "secondname": "Alap Mishra"
    }
  ]
  const listItems = arr.map((element) => {
    return (
        
  
      <div className="main">
        <a   style={{textDecoration:"none"}}><div className="card">
          <p className="head1">All Senior Ranking Badminton Tournament</p>
          <span className="type">{element.type}</span>
          <div className='between'>
            <div className='first'>
              <img src="https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08f830ae-ce65-42f5-b243-b7a3f8a15b5f%2Fcrown.png?table=block&id=11d166ac-814d-4227-853f-40ada51bf632&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2" id="crown" />
              <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' id='flag' />
              <div className='firstname'>{element.firstname}</div>
            </div>
            <div className='second'>
              <div className='versus'>V/S</div>
              <div className='score'>
                {element.score}
              </div>
              <img src='https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda00ca61-beb4-4735-8ff8-f6cff8597fc3%2Flogo_white.png?table=block&id=8e435d38-571b-4023-a052-a8516ebb7be7&spaceId=0c204483-284c-45aa-a8f3-e48b05979d20&userId=9753495c-0031-457c-af00-98eecfb93aa7&cache=v2' id='logo' />
            </div>
            <div className='third'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg' id='flag' />
              <div className='firstname'>{element.secondname}</div>
            </div>
          </div>
        </div></a>
      </div>


    )
  })
  return <div className='main'>
    {listItems}
  </div>
}
function Matches() {
  
  return (
    <>
      <header>International Matches</header>
      <input id="enter" type="text" placeholder=" &#128270; Search for matches" />

      <RenderingArrayOfObjects />
    </>
  );
}

export default Matches;
