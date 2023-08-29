import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let camera; // Declare the camera variable

const Scene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const aspectRatio = width / height;
  
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Enable alpha for transparency and anti-aliasing
    const loader = new GLTFLoader();

    // Set renderer to the size of its container
    renderer.setSize(width, height);

    // Add the canvas element created by the renderer to the page
    containerRef.current.appendChild(renderer.domElement);

    // Load a GLTF resource
    loader.load(
      '/models/FACE.gltf', // change this to the path of your GLTF file
      (gltf) => {
        // called when the resource is loaded
        scene.add(gltf.scene);

        // Use the camera from the glTF model
        camera = gltf.cameras.find(c => c.name === 'INTROCAMERA'); // replace 'INTROCAMERA' with the name of the camera in your model
        if (camera) {
          camera.aspect = aspectRatio;
          camera.updateProjectionMatrix();
        }
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
        camera.aspect = currentWidth / currentHeight;
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

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Scene;
