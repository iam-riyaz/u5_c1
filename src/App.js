import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {
let a=50/6
  const [score,scoreCount]=useState(76)
  const [wic,wicCount]=useState(2)
  const[ball,ballCount]=useState(a.toFixed(1))

  const handleScore=(value)=>{
    if(score>100){
      return
    }
    scoreCount(score+value)
  }

  const handleWic=(value)=>{
    if(score>100){
      return
    }

    if(wic>=11)
    {
      return
    }
    wicCount(wic+value)
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {score}
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
             wic
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"   onClick={()=>{ handleScore(1)}}>Add 1</button>
        <button className="addScore4"   onClick={()=>{ handleScore(4)}}>Add 4</button>
        <button className="addScore6"   onClick={()=>{ handleScore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>{handleWic(1) }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button>Add 1</button>
      </div>

      <h1>{score>100?"India Won":""}</h1>
    </div>
    
  );
}

export default App;
