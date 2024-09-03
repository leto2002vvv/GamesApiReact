import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'

const Malenia = () => {
    const glTf = useGLTF('./assets/3D-model/scene.gltf')

  return (
    <Canvas>
        <OrbitControls/>
        <primitive object = {glTf.scene} scale = {[1,1,1]} />
      
    </Canvas>
  )
}

export default Malenia
