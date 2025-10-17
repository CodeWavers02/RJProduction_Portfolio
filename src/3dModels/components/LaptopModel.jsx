
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF('../../public/laptopModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.498, 0.016, 0.416]} rotation={[-0.027, 0, 0]} scale={[55, 55, 55]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.black_plastic} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.touchpad} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.holes} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.ports} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.metal} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.speaker} />
      </group>
      <group position={[0.498, 0.037, 0.667]} rotation={[1.806, 0, 0]} scale={[55, 55, 55]}>
        <mesh geometry={nodes.Object_12.geometry} material={materials.body} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.display} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.touchscreen_bezel} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.black_plastic} />
      </group>
      <mesh geometry={nodes.Object_17.geometry} material={materials.body} position={[0.496, 0, 0.454]} rotation={[1.544, 0, 0]} scale={[55, 55, 55]}/>
    </group>
  )
}

useGLTF.preload('../../public/laptopModel.glb')
