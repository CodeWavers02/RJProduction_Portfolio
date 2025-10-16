import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF('../public/3Dmodels/ComputerModel.glb') // ✅ use root path, public/ auto served
  return (
    <group scale={[120, 120, 120]} >
      <group position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  )
}

useGLTF.preload('../public/3Dmodels/ComputerModel.glb')
