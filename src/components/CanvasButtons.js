export default function CanvasButtons({ canvasDetails, canvasTestRef, setCanvasDetails }) {
  const handleChange = (e) => {
    if(e.target.name === 'strokeWidth' && parseInt(e.target.value) > 100) {
      e.target.value = 100
    }
    setCanvasDetails({...canvasDetails, [e.target.name]: e.target.value})
    console.log(canvasDetails)
    console.log(e.target.value)
  }
  // const handleStrokeChange = (e) => {
  //   canvasDetails.strokeWidth =  parseInt(e.target.value)
  //   setCanvasDetails({...canvasDetails})
  // }
  return (
    <>
      <input type='color'
      name='strokeColor'
      onChange={handleChange}
      />
      <input
      name='strokeWidth'
      onChange={(e) => {
        // if (e.target.value > 100) e.target.value = 100;
        handleChange(e)}
      }
      >
      </input>
      <button
      onClick={() => {
        console.log(canvasDetails)
        console.log(canvasTestRef.current)
      }}
      >Test</button>
      <button>Pencil</button>
      <button>Eraser</button>
      <button>Undo</button>
      <button>Redo</button>
      <button
      
      >Reset</button>
      <button>Save</button>
    </>
  )
}