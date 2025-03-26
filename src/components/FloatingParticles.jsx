// import React, { useRef, useMemo } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const FloatingParticles = ({ count }) => {
//   const mesh = useRef();
  
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       const x = (Math.random() - 0.5) * 20;
//       const y = (Math.random() - 0.5) * 20;
//       const z = (Math.random() - 0.5) * 20;
      
//       const size = Math.random() * 0.2 + 0.05;
      
//       temp.push({ x, y, z, size });
//     }
//     return temp;
//   }, [count]);
  
//   const positions = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const sizes = new Float32Array(count);
    
//     particles.forEach((particle, i) => {
//       positions[i * 3] = particle.x;
//       positions[i * 3 + 1] = particle.y;
//       positions[i * 3 + 2] = particle.z;
//       sizes[i] = particle.size;
//     });
    
//     return { positions, sizes };
//   }, [particles, count]);
  
//   useFrame(() => {
//     if (mesh.current) {
//       mesh.current.rotation.x += 0.0002;
//       mesh.current.rotation.y += 0.0003;
//     }
//   });
  
//   return (
//     <points ref={mesh}>
//     <bufferGeometry>
//       <bufferAttribute
//         attach="attributes-position"
//         count={positions.positions.length / 3}
//         array={positions.positions}
//         itemSize={3}
//       />
//       <bufferAttribute 
//         attach="attributes-size" 
//         count={positions.sizes.length} 
//         array={positions.sizes} 
//         itemSize={1} 
//       />
//     </bufferGeometry>
//     <pointsMaterial
//       size={0.1}
//       sizeAttenuation={true}
//       color="#ffffff"
//       transparent
//       opacity={0.8}
//     />
//   </points>
// );
// };

// export default FloatingParticles;

//final
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = ({ count }) => {
  const mesh = useRef();
  
  // Particle positions and sizes
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
  
  // Rotate the particles gently
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0002;
      mesh.current.rotation.y += 0.0003;
    }
  });

  return (
    <group ref={mesh}>
      {particles.map((particle, index) => {
        // Create sprite material for each particle to make them circular
        const sprite = new THREE.SpriteMaterial({
          color: 0xffffff,  // Color of the particle
          map: new THREE.TextureLoader().load('/path/to/circular-particle-texture.png'),  // Use a circle texture for particles
          transparent: true,
          opacity: 0.8,
          sizeAttenuation: true,
        });
        
        return (
          <sprite
            key={index}
            position={[positions.positions[index * 3], positions.positions[index * 3 + 1], positions.positions[index * 3 + 2]]}
            scale={[particle.size, particle.size, 1]}  // Scale it to match the size of the particle
            material={sprite}
          />
        );
      })}
    </group>
  );
};

export default FloatingParticles;

//Grok code
// import React, { useRef, useMemo } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const FloatingParticles = ({ count }) => {
//   const points = useRef();

//   // Generate particle positions and sizes once
//   const { positions, sizes } = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const sizes = new Float32Array(count);

//     for (let i = 0; i < count; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 20;     // x
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//       sizes[i] = Math.random() * 0.2 + 0.05;
//     }
//     return { positions, sizes };
//   }, [count]);

//   // Create a single material for all particles
//   const particleMaterial = useMemo(() => {
//     const textureLoader = new THREE.TextureLoader();
//     // Replace with a valid texture path or create a simple circle programmatically
//     const texture = textureLoader.load('/circle.png') || createCircleTexture();
//     return new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.2,
//       map: texture,
//       transparent: true,
//       opacity: 0.8,
//       sizeAttenuation: true,
//     });
//   }, []);

//   // Optional: Create a fallback circle texture if the file is missing
//   const createCircleTexture = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = 16;
//     canvas.height = 16;
//     const ctx = canvas.getContext('2d');
//     ctx.beginPath();
//     ctx.arc(8, 8, 6, 0, Math.PI * 2);
//     ctx.fillStyle = '#ffffff';
//     ctx.fill();
//     return new THREE.CanvasTexture(canvas);
//   };

//   // Gentle rotation
//   useFrame(() => {
//     if (points.current) {
//       points.current.rotation.x += 0.0002;
//       points.current.rotation.y += 0.0003;
//     }
//   });

//   return (
//     <points ref={points}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-size"
//           count={count}
//           array={sizes}
//           itemSize={1}
//         />
//       </bufferGeometry>
//       <primitive object={particleMaterial} />
//     </points>
//   );
// };

// export default FloatingParticles;

// import React, { useRef, useState, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Billboard, useTexture, Preload } from "@react-three/drei";
// import * as THREE from "three";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// // Individual icon component using Billboard instead of Sprite
// const FloatingIcon = ({ url, position, scale }) => {
//   const texture = useTexture(url);
//   const iconRef = useRef();
  
//   useFrame((state, delta) => {
//     if (iconRef.current) {
//       // Add some gentle floating motion
//       iconRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.0005;
//       iconRef.current.rotation.z += delta * 0.1;
//     }
//   });
  
//   return (
//     <Billboard
//       ref={iconRef}
//       position={position}
//       scale={[scale, scale, scale]}
//       follow={true}
//       lockX={false}
//       lockY={false}
//     >
//       <meshBasicMaterial map={texture} transparent opacity={0.9} side={THREE.DoubleSide} />
//     </Billboard>
//   );
// };

// // Icons group component
// const FloatingIcons = ({ iconUrls = [], count = 10 }) => {
//   const iconsGroup = useRef();
  
//   // Create floating icons with random positions
//   const icons = useMemo(() => {
//     const temp = [];
//     const actualCount = Math.min(count, iconUrls.length * 2);
    
//     for (let i = 0; i < actualCount; i++) {
//       const iconIndex = i % iconUrls.length;
//       const position = [
//         (Math.random() - 0.5) * 2,
//         (Math.random() - 0.5) * 2,
//         (Math.random() - 0.5) * 2
//       ];
      
//       const scale = Math.random() * 0.07 + 0.03;
      
//       temp.push({
//         url: iconUrls[iconIndex],
//         position,
//         scale
//       });
//     }
    
//     return temp;
//   }, [iconUrls, count]);
  
//   // Gentle rotation for the entire icon group
//   useFrame((state, delta) => {
//     if (iconsGroup.current) {
//       iconsGroup.current.rotation.y += delta * 0.05;
//     }
//   });
  
//   return (
//     <group ref={iconsGroup}>
//       {icons.map((icon, index) => (
//         <FloatingIcon 
//           key={`icon-${index}`} 
//           url={icon.url} 
//           position={icon.position} 
//           scale={icon.scale} 
//         />
//       ))}
//     </group>
//   );
// };

// // Main star particles component
// const FloatingParticles = ({ starCount = 0, iconUrls = [] }) => {
//   const ref = useRef();
//   const [sphere] = useState(() => 
//     random.inSphere(new Float32Array(starCount * 3), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled
//       >
//         <PointMaterial
//           transparent
//           color="#ffffff"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={THREE.AdditiveBlending}
//         />
//       </Points>
      
//       {iconUrls.length > 0 && <FloatingIcons iconUrls={iconUrls} count={10} />}
//     </group>
//   );
// };

// export default FloatingParticles;