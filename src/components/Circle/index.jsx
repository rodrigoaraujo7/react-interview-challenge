import './style.css'

export const Circle = () => {
    const elementPosition = event => {
        console.log('position')

        let pageX = event.pageX;
        let pageY = event.pageY;

        console.log(pageX, pageY)
    }

    return <div className='circle' onClick={elementPosition}></div>
}