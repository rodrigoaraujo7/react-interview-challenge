import './App.css'

export const App = () => {
  const handleClick = (event) => {
    const newElementPosition = {
      clientX: event.clientX,
      clientY: event.clientY
    }

    console.log(newElementPosition.clientX);
    console.log(newElementPosition.clientY);

    const element = document.createElement('span'); 
    element.classList.add('circle')

    element.style.left = (newElementPosition.clientX - 180) + 'px';
    element.style.top = (newElementPosition.clientY - 155) + 'px';

    document.getElementById('content').appendChild(element)
  }

  const undo = () => {
    document.getElementById('content').lastElementChild.remove()
  }

  const redo = () => {
    document.getElementById('content').textContent = ''
  }

  return (
    <div className='container'>
      <center>
        <h1>ReactJS Interview Challenge</h1>
        <button onClick={undo}>undo</button>
        <button onClick={redo}>redo</button>
      </center>

      <div id="content" onClick={handleClick}>

      </div>
    </div>
  )
}

