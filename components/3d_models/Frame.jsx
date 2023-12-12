import { useState } from 'react'
import { useCursor } from "@react-three/drei";
import { FrameModelOne } from './FrameModelOne'

const Frame = () => {
    const [hovered, setHovered] = useState(false)
    useCursor(hovered)

    return (
        <group>
            <mesh
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
            >
                <FrameModelOne position={[0,1,0]}/>
            </mesh>
        </group>
    )
}

export default Frame