import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { makeNoise3D } from 'open-simplex-noise';

const Background = () => {
    const mount = useRef(null);

    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;
        let frameId;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshNormalMaterial();

        const sphere = new THREE.Mesh(geometry, material);

        // Create noise generator
        const noise = makeNoise3D(Date.now());

        // Save original coordinates
        const originalVertices = [...geometry.attributes.position.array];

        scene.add(sphere);
        camera.position.z = 3;

        const animate = () => {
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;

            const vertices = sphere.geometry.attributes.position.array;
            const time = Date.now() * 0.0001;

            for (let i = 0; i < vertices.length; i += 3) {
                const x = originalVertices[i];
                const y = originalVertices[i + 1];
                const z = originalVertices[i + 2];

                // Normalize coordinates to apply noise uniformly
                const distance = Math.sqrt(x * x + y * y + z * z);
                const nx = x / distance;
                const ny = y / distance;
                const nz = z / distance;

                const noiseFactor = noise(nx, ny, nz, time);

                // Modulate displacement with sine wave
                const displacement = 0.1 * Math.sin(2 * Math.PI * noiseFactor);

                vertices[i] = x + x * displacement;
                vertices[i + 1] = y + y * displacement;
                vertices[i + 2] = z + z * displacement;
            }

            sphere.geometry.attributes.position.needsUpdate = true;
            sphere.geometry.computeVertexNormals();

            renderer.render(scene, camera);
            frameId = window.requestAnimationFrame(animate);
        }

        const handleResize = () => {
            width = mount.current.clientWidth;
            height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        mount.current.appendChild(renderer.domElement);
        frameId = requestAnimationFrame(animate);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            mount.current.removeChild(renderer.domElement);
        }
    }, []);

    return <div ref={mount} style={{ width: '100%', height: '100vh', position: 'fixed', zIndex: -1 }} />;
};

export default Background;
