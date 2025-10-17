import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CameraModel(props) {
  const { nodes, materials } = useGLTF('/CameraModel.glb') // ✅ use root path, public/ auto served

  return (
    <group
      {...props}
      dispose={null}
      scale={[120, 120, 120]}       // 🔹 Increase size (make it much bigger)
      // position={[154, 100, 0]}         // 🔹 Shift it right (x=+ moves right, y=down, z=forward/back)
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['#CAM0001_Body_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} />
        <mesh geometry={nodes['#CAM0001_Battery_Check_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[0.05, 0.001, 0.072]} />
        <mesh geometry={nodes['#CAM0001_Spool_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[0.05, 0.001, 0.075]} />
        <mesh geometry={nodes['#CAM0001_Film_Advance_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.057, 0.001, 0.077]} />
        <mesh geometry={nodes['#CAM0001_Shutter_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.035, -0.006, 0.076]} />
        <mesh geometry={nodes['#CAM0001_Shutter_Speed_#CAM0001_Textures_0'].geometry} material={materials.CAM0001_Textures} position={[-0.057, 0.001, 0.073]} />
      </group>
    </group>
  )
}

useGLTF.preload('/CameraModel.glb')
