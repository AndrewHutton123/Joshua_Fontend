import React from "react"
import { ReactSketchCanvas,  } from 'react-sketch-canvas';
import { useState } from "react";

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};


export default function BasicPage() {
  const [colorChange, setColorChange] = useState('black')
  const [canvasSize, setCanvasSize] = useState({width: '100vw', height: '90vh'})
    const canvasTestRef = React.useRef(null)
    

    const handleUndo = () => {
        canvasTestRef.current.undo();
    }

    const handleColourChange = (e) => {
        setColorChange(e.target.value)
    }

    const handleCanvasSizeChange = () => {
      setCanvasSize({width: '20vw', height: '20vh'})
    }

    const handleRedraw = async () => {
        const testPaths = await canvasTestRef.current.exportPaths()
        console.log(testPaths, 'the export paths')
        const sketchingTime = await canvasTestRef.current.getSketchingTime()
        console.log(sketchingTime, 'sketching time')
        // canvasTestRef.current.clearCanvas()
        const overallStartTime = testPaths[0].startTimestamp
        const overallEndTime = testPaths[testPaths.length - 1].endTimestamp
        const lastPoint = testPaths[testPaths.length - 1].paths.slice(-1)[0]
        // console.log(lastPoint)
        // console.log(overallEndTime - overallStartTime)
        let totalPath = []
        testPaths.forEach(path => {
            const startTime = path.startTimestamp
            const endTime = path.endTimestamp
            path.paths.forEach((individualPoint, index) => {
                const objToDraw = {
                    drawMode: path.drawMode,
                    strokeColor: path.strokeColor,
                    paths: path.paths.slice(0, index),
                    strokeWidth: path.strokeWidth,
                    endTimestamp: path.endTimestamp,
                    startTimestamp: path.startTimestamp,
                }
                // console.log(path.paths.slice(0, index))
                window.setTimeout(() => {
                    // console.log(index)
                    // console.log(path.paths.length)
                    // console.log(endTime - overallStartTime)
                    // console.log((endTime - startTime)/path.paths.length * (index + 1))
                    // console.log(objToDraw)

                    // K-B. I Commented out the line underneath as it was clearing the canvas after every line drawn.
                    // canvasTestRef.current.resetCanvas()
                    canvasTestRef.current.loadPaths(objToDraw)
                    // console.log("HERE")
                }, (endTime - startTime)/path.paths.length * (index + 1) + (startTime - overallStartTime))
            })
            // need some logic to add previous paths
            // Was thinking to use some kind of logic to concat the arrays but it doesn't work with the timings at the moment
            // totalPath = totalPath.concat(path)
        })
      }

    
    return (
        <>
        <ReactSketchCanvas
      style={styles}
      width={canvasSize.width}
      ref={canvasTestRef}
      height={canvasSize.height}
      strokeWidth={4}
      strokeColor={colorChange}
      withTimestamp={true}
      />
    <button onClick={handleUndo}>
        Undo
    </button>
    <input type='color'
      onChange={handleColourChange}
    />
    {/* <button onClick={handleColourChange}>
        change colour
    </button> */}
    <button onClick={handleCanvasSizeChange}>
        change Size
    </button>
    <button onClick={handleCanvasSizeChange}>
        change Size
    </button>
    <button onClick={() => {
      // Added in the clearing before the function is called. This could also be done on the first line of the function handleRedraw. We will need to have a way to handle people redrawing when there is nothing on the canvas as it is currently an error.
      canvasTestRef.current.resetCanvas()
      handleRedraw()
    }}>
        Redraw
    </button>
      </>
    )
}