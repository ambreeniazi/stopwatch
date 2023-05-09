import React,{useEffect,useState} from 'react'
import "./Stopwatch.css";
import ControlButton from "../ControlButton/ControlButton";
import Timer from "../Timer/Timer";


function Stopwatch() {

      const [isActive, setIsActive] = useState(false);
      const [isPaused, setIsPaused] = useState(true);
      const [time, setTime] = useState(0);

      React.useEffect(() => {
            let interval = null;
          
            if (isActive && isPaused === false) {
              interval = setInterval(() => {
                setTime((time) => time + 10);
              }, 10);
            } else {
              clearInterval(interval);
            }
            return () => {
                    clearInterval(interval);
                  };
                }, [isActive, isPaused]);

              const handleStart = () => {
                setIsActive(true);
                setIsPaused(false);
             };
  
             const handlePauseResume = () => {
               setIsPaused(!isPaused);
             };
  
              const handleReset = () => {
                setIsActive(false);
               setTime(0);
             };           

  return (
  
        // < div style= {{ backgroundColor: "aqua", border: "2px solid black",
        // height:"23%" , width:"33%", display:"flex" , marginLeft: "25rem", marginTop:"20px", justifyContent:"center", alignItems:"center",
        //  flexDirection:"column"}}>
        <div className='stopwatch' >
        <Timer time = {time} />
        <ControlButton
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}/>      
           </div>
           );
}

export default Stopwatch;
