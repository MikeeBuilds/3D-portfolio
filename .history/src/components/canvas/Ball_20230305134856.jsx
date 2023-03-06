import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
}  from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <div>Ball</div>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <div className="w-28 h-28">
      <Canvas
        concurrent
        shadowMap
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Ball imgUrl={icon} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Ball