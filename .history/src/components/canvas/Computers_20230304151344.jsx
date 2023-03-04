import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { canvas } from "react-three-/fiber";
import { OrbitControls, Preload, useGLTF } from "react-three/drei";
import canvasLoader from '../canvasLoader';

const Computers = () => {
  const computers = useGLTF('/desktop.glb', true)


  return (
    <div>Computers</div>
  )
}

export default Computers