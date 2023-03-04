import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';


const Computers = () => {
  const computer = useGLTF("../desktop_pc/scene.gltf")


  return (
    <mesh>
      <hemisphereLight 
            intensity={0.15}
            groundColor='black'
      />
      <pointLight 
            intensity={1} />
      <spotLight 
            angle={0.12}
            position={[-20, 50, 10]} 
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            />
      <primitive 
            object={computer.scene} 
            scale={0.75}
            position={[0, -4, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 500px)');

      setisMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setisMobile(event.matches);
      }

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
  }, [])

  return (
    <Canvas
    frameLoop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false} 
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;