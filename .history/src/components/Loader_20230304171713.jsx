import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
    </Html>
  )
}

export default Loader