import { useEffect, useRef, useState } from 'react'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Frames from '../../components/3d_models/Frames'

const Model = () => {
    const frameRef = useRef()
    
    return (
        <div style={{height: '100vh'}}>
            <Canvas >
                <color attach="background" args={['#191920']} />
                <group position={[0, -0.5, 0]}>
                    <Frames />
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={80}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#050505"
                            metalness={0.5}
                        />

                    </mesh>
                </group>
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}

export default Model