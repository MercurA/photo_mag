import { useRef, useState } from 'react'
import styles from './model.module.css'
import { Canvas, useFrame } from '@react-three/fiber'

const Sphere = ({position, size, color}) => {
    const [hovered, setHovered] = useState(false)
    const sphereRef = useRef()
    useFrame((state, delta) => {
        sphereRef.current.rotation.y += delta/6
    })
    return (
        <mesh ref={sphereRef} onPointerOver={(e) => {e.stopPropagation(); setHovered(!hovered)}}>
            <sphereGeometry />
            <meshStandardMaterial color={hovered ? color : 'lightblue'} wireframe/>
        </mesh>
    )
}

const Model = () => {
    return (
        <div className={styles.container}>
            <Canvas >
                <directionalLight position={[0, 0, 7]} />
                <Sphere position={[0,0,0]} size={[1,1,1]} color={'orange'}/>
            </Canvas>
        </div>
    )
}

export default Model