import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BackgroundScene = () => {
  const containerRef = useRef(null);
  const clock = new THREE.Clock();

  const [fov, setFov] = useState(7); // Default field of view

  let mixer;
  let gltfCamera;
  let actions = [];
  let controls;

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const updateSizeAndAspect = (cameraToUpdate) => {
      const { width: currentWidth, height: currentHeight } = containerRef.current.getBoundingClientRect();
      cameraToUpdate.aspect = currentWidth / currentHeight;
      cameraToUpdate.updateProjectionMatrix();
      renderer.setSize(currentWidth, currentHeight);
    };

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const aspectRatio = width / height;

    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableKeys = false;  // Disable keyboard controls

    // Add a light so we can see the model
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Add the canvas element created by the renderer to the page
    containerRef.current.appendChild(renderer.domElement);

    loader.load(
      '/models/Background1.glb', // change this to the path of your GLTF file
      (gltf) => {
        // Setup animation mixer
        mixer = new THREE.AnimationMixer(gltf.scene);

        // Create AnimationAction for each animation clip
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.paused = true;  // set paused to true
          actions.push(action);  // store the action
        });

        // Adjust material transparency
        gltf.scene.traverse((node) => {
          if (!node.isMesh) return;
          const { material } = node;

          // If the node name is GLASS or GLASS2, then adjust transparency
          if (node.name === 'GLASS' || node.name === 'GLASS2') {
            if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
              material.transparent = true;
              material.opacity = 0.5; // adjust this to your needs
            }
          }
        });

        // Search for a camera named "BACKGROUNDCAMERA"
        gltfCamera = gltf.cameras.find((cam) => cam.name === 'BCAMERA');

        if (gltfCamera) {
          controls.object = gltfCamera;  // Attach controls to the gltfCamera
          gltfCamera.fov = fov;  // Apply the current fov to gltfCamera
          gltfCamera.updateProjectionMatrix();
        }

        scene.add(gltf.scene);

        // Ensure the aspect ratio is set correctly right after loading the model
        updateSizeAndAspect(gltfCamera || camera);
        if (onModelLoaded) {
          onModelLoaded();
        }
      },

      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Set OrbitControls configuration
    controls.enableZoom = false; // Disable zoom
    controls.enablePan = false;  // Disable panning
    controls.enableRotate = true; // Only rotation is enabled
    controls.minPolarAngle = 0; // Allow rotation below the horizon
    controls.maxPolarAngle = Math.PI; // Allow rotation above the zenith

    const animate = () => {
      requestAnimationFrame(animate);

      if (mixer) {
        mixer.update(clock.getDelta());
      }

      if (gltfCamera) {
        renderer.render(scene, gltfCamera);
      } else {
        renderer.render(scene, camera);
      }

      controls.update();  // Needed for damping and auto-rotation
    };

    window.addEventListener('scroll', () => {
      // Calculate the current scroll position as a fraction of the total scrollable height
      const scrollFraction = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);

      // Update the animation time based on the scroll fraction and the total duration of the animation
      if (mixer && actions.length > 0) {
        const totalFrames = 415; // Total frames in your animation
        const fps = 30; // Frames per second
        const duration = totalFrames / fps; // Total duration of your animation in seconds
        actions.forEach((action) => {
          action.time = scrollFraction * duration;
          action.play();  // play the animation
        });
      }
    });

    animate();

    const onWindowResize = () => {
      if (gltfCamera) {
        updateSizeAndAspect(gltfCamera);
      } else {
        updateSizeAndAspect(camera);
      }
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      containerRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [fov]); // re-run effect when fov changes

  return <div ref={containerRef} id="background-scene" />;
};

export default BackgroundScene;
