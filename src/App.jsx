import { useEffect, useState } from 'react'
import './App.css'
import { Circle } from './components/Circle';

export const App = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const update = event => {
      setX(event.x);
      setY(event.y);
    }

    window.addEventListener('mousemove', update);
    window.addEventListener('click', () => {
      const element = document.createElement('span'); 

      element.style.padding = '15px';
      element.style.borderRadius = '80px';
      element.style.backgroundColor = '#DA0037';

      document.getElementById('content').appendChild(element)
    });
  }, [setX, setY])

  return (
    <div id='content'>
      <h1>ReactJS Interview Challenge</h1>
      <h1>{`x: ${x}; y: ${y};`}</h1>
    </div>
  )
}

