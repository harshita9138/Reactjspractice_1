import { useState } from 'react'
// useState is a hook which is used to propagate changes,hooks are imported as above in{} as it is method
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // usestate is used like this,we can write an ytging in it,usestate gives two things in format of array
  // one value at 0 index and another value is function which we generally called as setcounter,we can change its name
 let [counter,setCounter]=useState(0);
//  0 isliyelikha hai kyonki by default shuru kr rhe 0 ki jgh koi bhi num likh skte hai
// we can change name of counter aND setcounter

// let counter=10;

// ADD VALUE

let addValue=()=>{

  // value of counter is increasing on console but on screen value of counter is not changing,which meansproblem is occuring UI updation 
  // counter variable not updating in UI

  // if(counter<10){ to set limit
  counter=counter+1;
  setCounter(counter);
  // }
  // set counter vo value leta hai jo nayi value hme counter me dalni hai hm counter bhi likh skte hain aur counter+1 bhi
  // console.log("clicked",counter);
  // counter any where in ui will update
}

// IF THERE ARE MULTIPLE PLACES WHERE SAME VARIABLE USED SO IT CREATES PROBLEM IN UPDATION NOTMALLY
// THATS WHY DATA UPDATION CONTROL IS DONE BY REACT AND DATA UPDATION IN UI IS DONE WITH HELP OF HOOKS IN REACT
// there are many hooks and EVERY HOOK HAS SPECIALISED TASK WHICH MAKES IT EASY IN DEBUGGING AND READABLE

// REMOVE VALUE

let removeValue=()=>{
 if(counter>0){
  counter=counter-1;
  setCounter(counter);
 }

}
  return (
    <>
     <h1>Helloooo</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Increase Value</button>
     <br/>
     <button  onClick={removeValue}>Decrease Value</button>
  
    </>
  )
}

export default App
