import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../Loader';


const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{  }}
    >
      <Suspense fallback={<CanvasLoader />}>
        </Suspense>
        
    </Canvas>
  )
}

export default Earth