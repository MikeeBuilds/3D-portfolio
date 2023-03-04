import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../canvasLoader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black'
      />
      <pintLight 
    </mesh>
  )
}

export default Computers