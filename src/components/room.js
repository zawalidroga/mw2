import * as THREE from 'three';
import { useEffect  } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



export const Room = () => {


    useEffect(()=>{
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x2D3235);
        const camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth / window.innerHeight,
            1,
            1000,
        );
        camera.position.z = 500;
        const canvas = document.getElementById('room-canvas');
        const renderer = new THREE.WebGL1Renderer({
            canvas,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);


        document.body.appendChild(renderer.domElement);


        //light

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow=true;
        scene.add(ambientLight)
        
        const spotLight = new THREE.SpotLight(0xffffff,0.5, 100, Math.PI/4);
        spotLight.castShadow = true;
        spotLight.position.set(0, 20, 5);
        spotLight.rotateZ(10)
        spotLight.castShadow = true;
        scene.add(spotLight);

        //floor

        const fstFloorGeometry = new THREE.BoxGeometry(50,1,50);
        const fstFloorMaterial = new THREE.MeshToonMaterial( {color: 0x534D41});
        const fstFloor = new THREE.Mesh(fstFloorGeometry, fstFloorMaterial);
        fstFloor.position.set(0, 1, 0);

        const scdFloorGeometry = new THREE.BoxGeometry(50,1,50);
        const scdFloorMaterial = new THREE.MeshToonMaterial( {color: 0x6B5B4B});
        const scdFloor = new THREE.Mesh(scdFloorGeometry, scdFloorMaterial);

        const thdFloorGeometry = new THREE.BoxGeometry(50,1,50);
        const thdFloorMaterial = new THREE.MeshToonMaterial( {color: 0x534D41});
        const thdFloor = new THREE.Mesh(thdFloorGeometry, thdFloorMaterial);
        thdFloor.position.set(0, -1, 0);
        thdFloor.castShadow = true;
        thdFloor.receiveShadow = true;
        scene.add(fstFloor, scdFloor, thdFloor);

        const carpetGeometry = new THREE.PlaneGeometry(50,50)
        const carpetMaterial = new THREE.MeshToonMaterial( {color: 0x5E8276, side: THREE.DoubleSide} );
        const carpet = new THREE.Mesh(carpetGeometry,carpetMaterial);
        carpet.rotateX( Math.PI / 2);
        carpet.position.set(0, 1.6, 0);
        scene.add(carpet)

        


       

        const ligthHelper = new THREE.PointLightHelper(spotLight);
        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add( ligthHelper, gridHelper);




        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () =>{
            // boxMesh.rotation.x += 0.01;
            // boxMesh.rotation.y += 0.01;
            renderer.render(scene, camera);
            controls.update();
            window.requestAnimationFrame(animate);
        };

        animate();

    },[]);

    return(
        <div>
            <canvas id='room-canvas' />
        </div>
    )
}