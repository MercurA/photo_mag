import { useState, useRef } from 'react'
import { useCursor } from "@react-three/drei";
import { Frame } from './Frame'

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

    return (
        <group
            ref={ref}
            // onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
            // onPointerMissed={() => setLocation('/')}
        >
                
        </group>
    )
}

export default Frames