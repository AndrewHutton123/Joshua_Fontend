export default function CanvasButtons({ canvasDetails, canvasTestRef, setCanvasDetails }) {
  const handleChange = (e) => {
    if(e.target.name === 'strokeWidth' && parseInt(e.target.value) > 100) {
      e.target.value = 100
    }
    setCanvasDetails({...canvasDetails, [e.target.name]: e.target.value})
    console.log(canvasDetails)
    console.log(e.target.value)
  }
  const handleEraserButton = (boolean) => {
    canvasTestRef.current.eraseMode(boolean)
  }
  return (
    <div className="canvas-btns">
      <input type='color'
      className="color-wheel"
      name='strokeColor'
      onChange={handleChange}
      />
      <input
      name='strokeWidth'
      value={canvasDetails.strokeWidth}
      onChange={(e) => {
        handleChange(e)}
      }
      className='canvas-input'
      >
      </input>
      <button
      onClick={() => {
        console.log(canvasDetails)
        console.log(canvasTestRef.current)
      }}
      className='canvas-btn'
      >Test</button>
      <button
      name='eraseMode'
      onClick={() => handleEraserButton(false)}
      className='canvas-btn'
      >Pencil</button>
      <button
      name='eraseMode'
      onClick={() => handleEraserButton(true)}
      className='canvas-btn'
      >Eraser</button>
      <button
      onClick={() => canvasTestRef.current.undo()}
      className='canvas-btn'
      >Undo</button>
      <button
      onClick={() => canvasTestRef.current.redo()}
      className='canvas-btn'
      >Redo</button>
      <button
      // Tried with clearCanvas to try and keep the undo stack but undo goes a bit funny when you clearCanvas. The undo stack will not be updated with anything after the clearCanvas was done it will undo to what it was before the clearCanvas was done.
      onClick={() => canvasTestRef.current.resetCanvas()}
      className='canvas-btn'
      >Reset</button>
      <button
      className='canvas-btn'
      >Save</button>
    </div>
  )
}