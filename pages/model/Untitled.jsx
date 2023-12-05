/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ../../public/model/untitled.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('model/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-41.085, 4.742, -0.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1.487, 1, 1]}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.004']} rotation={[0, Math.PI / 2, 0]} scale={[10.149, 10.149, 45.969]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} position={[0, 5.585, -0.752]} rotation={[Math.PI / 2, 0, 0]} scale={[45.627, 5.754, 5.754]} />
      <group position={[3.171, 4.742, -0.56]} rotation={[Math.PI / 2, 0, 0]} scale={[1.487, 1, 1]}>
        <mesh geometry={nodes.Plane004.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')