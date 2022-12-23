import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  const handleClick = (event) => {
    const newElementPosition = {
      clientX: event.clientX,
      clientY: event.clientY
    }

    const element = document.createElement('span'); 

    element.style.position = "absolute";
    element.style.left = newElementPosition.clientX + 'px';
    element.style.top = newElementPosition.clientY + 'px';

    element.style.padding = '15px';
    element.style.borderRadius = '80px';
    element.style.backgroundColor = '#DA0037';

    console.log(newElementPosition.clientX)
    console.log(newElementPosition.clientY)

    document.getElementById('content').appendChild(element)
  }

  return (
    <div id='content' onClick={handleClick}>
      <h1>ReactJS Interview Challenge</h1>
      {x && y ? (<h1>{`x: ${x}; y: ${y};`}</h1>) : null}
    </div>
  )
}

