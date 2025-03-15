import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = ({ count }) => {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      
      const size = Math.random() * 0.2 + 0.05;
      
      temp.push({ x, y, z, size });
    }
    return temp;
  }, [count]);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    particles.forEach((particle, i) => {
      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;
      sizes[i] = particle.size;
    });
    
    return { positions, sizes };
  }, [particles, count]);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0002;
      mesh.current.rotation.y += 0.0003;
    }
  });
  
  return (
    <points ref={mesh}>
    <bufferGeometry>
      <bufferAttribute
        attach="attributes-position"
        count={positions.positions.length / 3}
        array={positions.positions}
        itemSize={3}
      />
      <bufferAttribute 
        attach="attributes-size" 
        count={positions.sizes.length} 
        array={positions.sizes} 
        itemSize={1} 
      />
    </bufferGeometry>
    <pointsMaterial
      size={0.1}
      sizeAttenuation={true}
      color="#ffffff"
      transparent
      opacity={0.8}
    />
  </points>
);
};

export default FloatingParticles;