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
    window.addEventListener('touchmove', update);
  }, [setX, setY])

  return (
    <div>
      <h1>ReactJS Interview Challenge</h1>
      <h1>{`x: ${x}; y: ${y};`}</h1>
      <Circle></Circle>
    </div>
  )
}

