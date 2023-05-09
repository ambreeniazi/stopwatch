import React from 'react'
import "./ControlButton.css"

export default function ControlButton(props){
  
 const StartButton = (
    <div className="btn-one btn start"
    onClick={props.handleStart}>
        Start
    </div>
    );
  const ActiveButtons =(
    <div className ="btn-grp">
     <div className= "btn btn-two"
     onClick = {props.handleReset}>
    Reset
    </div>
    <div  className=" btn btn-one"
    onClick = {props.handlePauseResume}>
    {props.isPaused ? "Resume" : "Pause"}
    </div>
    </div>
    );
      return (
            <div className="Control-Buttons">
              <div>{props.active ? ActiveButtons : StartButton}</div>
            </div>
          );
    
 }
