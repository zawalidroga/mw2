import * as THREE from "three";
import {extend} from '@react-three/fiber'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import React from "react";
import almendra from 'three/examples/fonts/helvetiker_regular.typeface.json'

extend({ TextGeometry })

export const Text = () =>{
    const font = new FontLoader().parse(almendra)

    return(
        <>
            <mesh>
                <textGeometry args={['helo', {font, size: 50, height:20, color: '0xffffff'}]} />
                <meshPhysicalMaterial attach='material' color='0xffffff' />
            </mesh>
        </>
    )
}