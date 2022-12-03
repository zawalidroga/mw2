import * as THREE from "three";
import {extend} from '@react-three/fiber'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import React from "react";
import almendra from 'three/examples/fonts/helvetiker_regular.typeface.json'

extend({ TextGeometry })

export const Text = (props) =>{
    const font = new FontLoader().parse(almendra);

    return(
        <>
            <mesh position={[-80,0,200]} onClick={props.clickHandle} onMouseOver={props.hoverHandle}>
                <textGeometry args={[
                    'helo',
                    {font, size: 50, height:10, }
                    ]} />

                <meshBasicMaterial 
                    attach='material'   
                    color={'#000000'}
                    />
            </mesh>

            <mesh position={[-80,-30,200]} onClick={props.clickHandle}>
                <textGeometry args={[
                    'click me!',
                    {font, size: 25, height:10, }
                    ]} />

                <meshBasicMaterial 
                    attach='material'   
                    color={'#000000'}
                    />
            </mesh>
        </>
    )
}