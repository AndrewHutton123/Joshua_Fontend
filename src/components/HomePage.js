import React from "react"
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useState } from 'react'
import CanvasButtons from "./CanvasButtons";

export default function HomePage() {
  const canvasTestRef = React.useRef(null)

  const [ canvasDetails, setCanvasDetails ] = useState({
    canvasWidth: '200px',
    canvasHeight: '200px',
    strokeColor: 'black',
    strokeWidth: '10',
    eraseMode: true,
  })

  const Canvas = () => {
    return(
    <ReactSketchCanvas
      width='300px'
      height='200px'
      strokeColor={canvasDetails.strokeColor}
      strokeWidth={canvasDetails.strokeWidth}
      eraserWidth={canvasDetails.strokeWidth}
      ref={canvasTestRef}
    />
    )
  }
    return (
      <>
        <button>Canvas Size</button>
        {Canvas()}
        <CanvasButtons 
        canvasDetails={canvasDetails}
        setCanvasDetails={setCanvasDetails}
        canvasTestRef={canvasTestRef}
        />
      </>
    )
}