import { useEffect, useRef, useState } from 'react'
import styles from './model.module.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Controllers from '../../components/navigation/Controlers'
import { CameraControls, OrbitControls } from '@react-three/drei'
import * as THREE from "three";

const Sphere = ({ position, size, color }) => {
    const [hovered, setHovered] = useState(false)

    const sphereRef = useRef()

    useFrame((state, delta) => {
        sphereRef.current.rotation.y += delta / 6
    })

    return (
        <mesh ref={sphereRef} onPointerOver={(e) => { e.stopPropagation(); setHovered(!hovered) }}>
            <sphereGeometry position={position} />
            <meshStandardMaterial color={hovered ? color : 'lightblue'} wireframe />
        </mesh>
    )
}

const Scene = ({ cameraPos }) => {
    const cameraControlsRef = useRef(new THREE.Vector3(0, 0, 0))
    const { camera } = useThree();

    useFrame((state, delta) => {
        cameraControlsRef.current.moveTo(cameraPos[0],0,0, true)
        console.log(state)
    })

    return (
        <>
            <group>
                <directionalLight position={[0, 0, 7]} />
                <Sphere position={[0, 0, 0]} size={[1, 1, 1]} color={'orange'} />
                <CameraControls
                    makeDefault
                    ref={cameraControlsRef}
                />
            </group>
        </>
    )
}

const Model = () => {
    const [position, setPosition] = useState([0, 0, 0])

    const handleDirection = (e) => {
        if (e.target.id === 'right') {
            setPosition([3, 0, 0])
        } else if (e.target.id === 'left') {
            setPosition([-3, 0, 0])
        }

    }

    return (
        <div className={styles.container}>
            <Controllers handleDirection={handleDirection} />
            <Canvas >
            <ambientLight intensity={0.03} />
                <Scene cameraPos={position} />
            </Canvas>
        </div>
    )
}

export default Model