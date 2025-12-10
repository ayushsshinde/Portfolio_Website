import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Type definitions to ensure TS doesn't complain about JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      group: any;
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
    }
  }
}

const Robot = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // Adjust scale based on viewport width (smaller on mobile)
  const isSmall = viewport.width < 7;
  const scale = isSmall ? 1.1 : 1.4;
  
  // Position: Right side on desktop (x ~ 2.5), Centered-top on mobile
  const positionX = isSmall ? 0 : 2.5;
  const positionY = isSmall ? 1 : 0;

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Get mouse position (normalized -1 to 1)
    const { x, y } = state.pointer;
    
    // Smooth head rotation to follow cursor
    // Make it look slightly towards the center (left) on desktop by default
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (x - (isSmall ? 0 : 0.5)) * 0.5, 0.1);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.3, 0.1);

    // Eye movement logic
    if (leftEyeRef.current && rightEyeRef.current) {
        // Calculate offset based on mouse position
        const xOffset = x * 0.15;
        const yOffset = y * 0.15;
        
        // Base positions for eyes
        const leftBase = new THREE.Vector3(0.22, 0.05, 0.44);
        const rightBase = new THREE.Vector3(-0.22, 0.05, 0.44);
        
        // Apply smooth movement to eyes
        leftEyeRef.current.position.x = THREE.MathUtils.lerp(leftEyeRef.current.position.x, leftBase.x + xOffset, 0.2);
        leftEyeRef.current.position.y = THREE.MathUtils.lerp(leftEyeRef.current.position.y, leftBase.y + yOffset, 0.2);
        
        rightEyeRef.current.position.x = THREE.MathUtils.lerp(rightEyeRef.current.position.x, rightBase.x + xOffset, 0.2);
        rightEyeRef.current.position.y = THREE.MathUtils.lerp(rightEyeRef.current.position.y, rightBase.y + yOffset, 0.2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <group ref={groupRef} scale={scale} position={[positionX, positionY, 0]}>
        {/* Head Main Shape - White Glossy */}
        <RoundedBox args={[1.4, 1.0, 0.8]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
        </RoundedBox>

        {/* Face Screen (Black Visor) */}
        <mesh position={[0, 0, 0.38]}>
            <boxGeometry args={[1.1, 0.65, 0.1]} />
            <meshStandardMaterial color="#050505" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Eyes Group - Glowing Green */}
        {/* Left Eye */}
        <mesh ref={leftEyeRef} position={[0.22, 0.05, 0.44]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshBasicMaterial color="#a3e635" toneMapped={false} />
            <pointLight distance={0.5} intensity={2} color="#a3e635" decay={2} />
        </mesh>
        
        {/* Right Eye */}
        <mesh ref={rightEyeRef} position={[-0.22, 0.05, 0.44]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshBasicMaterial color="#a3e635" toneMapped={false} />
            <pointLight distance={0.5} intensity={2} color="#a3e635" decay={2} />
        </mesh>

        {/* Antenna */}
        <group position={[0, 0.5, 0]}>
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                <meshStandardMaterial color="#888888" metalness={0.5} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.25, 0]}>
                <sphereGeometry args={[0.06]} />
                <meshStandardMaterial color="#ef4444" roughness={0.2} />
            </mesh>
        </group>

        {/* Ears */}
        <mesh position={[0.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
             <cylinderGeometry args={[0.15, 0.15, 0.1]} />
             <meshStandardMaterial color="#e5e7eb" />
        </mesh>
        <mesh position={[-0.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
             <cylinderGeometry args={[0.15, 0.15, 0.1]} />
             <meshStandardMaterial color="#e5e7eb" />
        </mesh>
      </group>
    </Float>
  );
};

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={1} color="#a3e635" />
        
        {/* Fill light for bottom to separate from background */}
        <directionalLight position={[0, -5, 2]} intensity={0.5} color="#blue" />

        <Environment preset="city" />
        
        <Robot />
        
        {/* Soft shadow at the bottom */}
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
};