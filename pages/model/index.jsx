import { Canvas } from '@react-three/fiber'
import {Model} from './Untitled'
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react'

const ModelContainer = () => {
    return (
        <div id="canvas-container">
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: '#111a21',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    <Model position={[0.025, -0.9, 0]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default ModelContainer