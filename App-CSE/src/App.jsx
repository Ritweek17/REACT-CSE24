import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting'

function App() {
  

  return (
    <>
   <center><h1>Student Information</h1></center>
    <Greeting name={"Rahul Sharma"} course={"Course:Computer Science"} marks={"Marks:85"} />
     <Greeting name={"Anita Verma"} course={"Course:Information Technology"} marks={"Marks:92"} />
      <Greeting name={"Rohan Gupta"} course={"Course:Electronics"} marks={"Marks:78"} />
    
    </>
  )
}

export default App
