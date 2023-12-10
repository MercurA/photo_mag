import { useRef, useState } from 'react'
import styles from './model.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Controllers from '../../components/navigation/Controlers'
import { CameraControls } from '@react-three/drei'

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

const Scene = ({cameraPos}) => {
    const cameraControlsRef = useRef()

    useFrame(() => {
        cameraControlsRef.current.moveTo(cameraPos[0],0,0, true)
    })

    return (
        <>
            <group>
                <directionalLight position={[0, 0, 7]} />
                <Sphere position={[0,0,0]} size={[1, 1, 1]} color={'orange'} />
                <CameraControls
                    ref={cameraControlsRef}
                    enabled={false}
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
                <Scene cameraPos={position}/>
            </Canvas>
        </div>
    )
}

export default Model