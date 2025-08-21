import { useRef, useEffect } from "react";
import * as THREE from "three";

const GlobeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.9, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: 0x5588ff,
      metalness: 0.3,
      roughness: 0.7,
      wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      globe.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default GlobeBackground;
