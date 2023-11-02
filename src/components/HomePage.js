import React from "react"
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useState } from 'react'
import CanvasButtons from "./CanvasButtons";

export default function HomePage() {
  const canvasTestRef = React.useRef(null)

  const [ canvasDetails, setCanvasDetails ] = useState({
    canvasWidth: '65vw',
    canvasHeight: '60vh',
    strokeColor: 'black',
    strokeWidth: '10',
  })

  const Canvas = () => {
    return(
    <ReactSketchCanvas
      width={canvasDetails.canvasWidth}
      height={canvasDetails.canvasHeight}
      strokeColor={canvasDetails.strokeColor}
      strokeWidth={canvasDetails.strokeWidth}
      eraserWidth={canvasDetails.strokeWidth}
      ref={canvasTestRef}
      className='canvas'
    />
    )
  }
    return (
      <main className="main-page">
        <div className="canvas-container">
          <aside></aside>
          {Canvas()}
          <aside className="save-data">
            <button>Aside</button>
          </aside>
        </div>
        <CanvasButtons 
        canvasDetails={canvasDetails}
        setCanvasDetails={setCanvasDetails}
        canvasTestRef={canvasTestRef}
        />
      </main>
    )
}