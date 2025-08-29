import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense } from 'react';
import ParticlesMorphing from './ParticlesMorphing';
import ParticleBackground from './ParticleBackground';
import { Perf } from 'r3f-perf';

export default function Scene() {
  return (
    // Handles canvas setup, camera, and global state
    <>
      <Leva collapsed />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        performance={{ min: 0.5 }}
      >
        <Suspense>
          <Perf position="top-left" />

          <ParticlesMorphing />
          <ParticleBackground />
          {/* <ParticleBackground />
          <CursorFlow />
          <CircleCluster /> */}
        </Suspense>
      </Canvas>
    </>
  );
}
