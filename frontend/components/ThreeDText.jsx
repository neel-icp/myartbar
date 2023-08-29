import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let camera; // Declare the camera variable


const ThreeDText = () => {
  const containerRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const aspectRatio = width / height;
  
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Enable alpha for transparency and anti-aliasing// Enable alpha for transparency
    const loader = new GLTFLoader();

    // Set renderer to the size of its container
    renderer.setSize(width, height);

    // Add a light so we can see the model
    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);

    // Add the canvas element created by the renderer to the page
    containerRef.current.appendChild(renderer.domElement);

    // Load a GLTF resource
    loader.load(
      '/models/3DSIGNATURE.gltf', // change this to the path of your GLTF file
      (gltf) => {
        // called when the resource is loaded
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);

        // Use the camera from the glTF model
        camera = gltf.cameras.find(c => c.name === 'TEXTCAMERA'); // replace 'TEXTCAMERA' with the name of the camera in your model
        camera.aspect = aspectRatio;
        camera.updateProjectionMatrix();

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI / 2; 
        controls.minPolarAngle = Math.PI / 2;
      },
      undefined,
      (error) => {
        // called if loading fails
        console.error(error);
      }
    );
  
    
    // Define the animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Render the scene with the camera
      if (camera) {
        renderer.render(scene, camera);
      }
    };

    animate();

    const onWindowResize = () => {
      const currentWidth = containerRef.current.clientWidth;
      const currentHeight = containerRef.current.clientHeight;
    
      if (camera) {
        const aspect = currentWidth / currentHeight;
    
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
    
      renderer.setSize(currentWidth, currentHeight);
    };
    
    
    
    // Event listener for window resize
    window.addEventListener('resize', onWindowResize);

   

    // Clean up on unmount
    return () => {
      containerRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <div ref={containerRef} style={{ width: '500px', height: '500px',  left: '-120px', marginTop: '-200px' ,position: 'relative' }} />;

};

export default ThreeDText;
