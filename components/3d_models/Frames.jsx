import { useState, useRef, useEffect } from 'react'
import { useCursor } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { FrameModel_1 } from './FrameModel_1';
import * as THREE from 'three'
import {easing} from 'maath'
const frames = [
    {
        mats: ['Material.001', 'Material.002'],
        path: '/model/frame1.glb'
    },
    {
        mats: ['Material.001', 'Material.002'],
        path: '/model/frame2.glb'
    },
]

const Frames = () => {
    const ref = useRef()
    const [frameRef, setFrameRef] = useState(null)
    const vector = new THREE.Vector3()
    const handleClicked = (e, ref) => {
        setFrameRef(ref)
    }

    useEffect(() => {
       
    })

    useFrame((state) => {
        if(frameRef !== null) {
            const {x, y, z} = frameRef.current.position
            state.camera.lookAt(frameRef.current.position)
            state.camera.position.lerp(vector.set(x, y, z + 2.5), 0.1)
            state.camera.updateProjectionMatrix()
        }
        return null
    })

    return (
        <group
            ref={ref}
        >
            <FrameModel_1 handleClicked={(e) => handleClicked(e, ref)}/>
        </group>
    )
}

export default Frames