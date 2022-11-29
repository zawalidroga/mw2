import * as THREE from "three";
import gsap from "gsap";
import { createNoise3D } from "simplex-noise";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";


const noise3d = createNoise3D();
const particlesNumber = 6000;

export const Blop = () => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);


    const vertices = new Float32Array(particlesNumber * 3);
    const distance = Math.min(200, window.innerWidth / 4);
    
    const refPoints = useRef(null)
    const ref = useRef(null);

useEffect(() => {
    ref.current.setAttribute( 'position', new THREE.Float32BufferAttribute(vertices, 3));
    ref.current.setAttribute(
        "basePosition",
        new THREE.BufferAttribute().copy(ref.current.attributes.position)
      );
},[])

  useEffect(() => {

    let p = ref.current.getAttribute( 'basePosition' );
    let x, y, z;
    x = y = z = 0;

    for (let i = 0; i < particlesNumber; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      x = distance * Math.sin(theta) * Math.cos(phi);
      y = distance * Math.sin(theta) * Math.sin(phi);
      z = distance * Math.cos(theta);

      p.setXYZ(i, x, y, z);
    }
  }, []);



  useFrame(() => {

    const time = performance.now() * 0.5;
    
    const basePositionAttribute = ref.current.getAttribute('basePosition');
    const positionAttribute = ref.current.getAttribute('position');
    const vertex = new THREE.Vector3();

    //console.log(basePositionAttribute)
if(basePositionAttribute !== undefined){ 
    for (var i = 0; i < particlesNumber; i++) {
      vertex.fromBufferAttribute(basePositionAttribute, i);

      let noise = noise3d(
        vertex.x * 0.003 + time * 0.0002,
        vertex.y * 0.003 + time * 0.0003,
        vertex.z * 0.003
      );

      let ratio = noise * 0.4 * (0.8 + 0.1) + 0.8;
      vertex.multiplyScalar(ratio);

        // setVertexo(() => [])
        // console.log(vertexo)
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

    }

    setRotationX((rotationX) => rotationX + 0.003);
    setRotationY((rotationY) => rotationY + 0.003);
    //refPoints.current.rotation.set(rotationX, rotationY)   
    refPoints.current.rotation.x = rotationX;
    refPoints.current.rotation.y = rotationY;
    
    refPoints.current.geometry.attributes.position.needsUpdate = true;
    refPoints.current.geometry.computeBoundingSphere();
  }});

  return (
    <>
      <points boundingSphere={50} ref={refPoints}>
        <bufferGeometry
            ref={ref}
            attach = 'geometry'

        />
        <pointsMaterial 
            color={0xff44ff} 
            size={1} 
            attach = 'material'
        />
      </points>
    </>
  );
};
