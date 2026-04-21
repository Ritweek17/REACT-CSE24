import React from 'react'

function Greeting({name,course,marks}) {
  return (
    <div class="score-card">
      <h1>{name}</h1>
      <p>{course}</p>
      <p>{marks}</p>
    </div>
  )
}

export default Greeting
