import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../Loader';


const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive 
    object={earth.scene}
    scale={2.5}
    position-y={0}
    rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{ 
      fov: 45,
      
     }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />


          <Earth />
        </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;