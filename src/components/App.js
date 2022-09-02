import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const[workd, setWorkd] = useState(25)
    const[breakd, setBreakd] = useState(5)
    const workdf = (e)=>{
        const inputw = e.target.value
        setWorkd(inputw)
    }
    const breakdf = (e)=>{
        const inputb = e.target.value
        setBreakd(inputb)
    }
    var interval
    useEffect(()=>{
        interval = setInterval(()=>{
            setWorkd(workd-1)
            setBreakd(breakd-1)
            if(workd<=0){
                setWorkd(0)
            }            
            if(breakd<=0){
                setBreakd(0)
            }
        }, 1000)
        return()=>clearInterval(interval)
    })
    const setf = ()=>{
        
    }
    const startf = ()=>{
        setWorkd(workd-1)
        setBreakd(breakd-1)
    }
    const stopf = ()=>{
        clearInterval(interval)
    }
    const resetf = ()=>{
        setWorkd(25)
        setBreakd(5)
    }
  
  return (    
    <div id="main">
    <h1>{workd}</h1>
    <h1>{breakd}</h1>
    <input data-testid = "work-duration" onChange = {workdf}/>
    <input data-testid = "break-duration" onChange = {breakdf}/>
    <button data-testid = "set-btn" onClick= {setf}>Set</button>
    <button data-testid = "start-btn" onClick = {startf}>Start</button>    
    <button data-testid = "stop-btn" onClick = {stopf}>Stop</button>
    <button data-testid = "stop-btn" onClick = {resetf}>Reset</button>
    </div>
  )
}


export default App;
