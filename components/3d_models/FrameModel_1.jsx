
import React, { useRef, useState } from 'react'
import { useGLTF, useCursor } from '@react-three/drei'

export function FrameModel_1(props) {
  const { nodes, materials } = useGLTF('/model/frame1.glb')
  const [hovered, setHoverd] = useState(false)
  useCursor(hovered)

  return (
    <group
      {...props}
      dispose={null}
      onClick={props.handleClicked}
      onPointerOver={(e) => {e.stopPropagation(); setHoverd(true)}}
      onPointerOut={() => setHoverd(false)}
    >
      <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('/model/frame1.glb')
