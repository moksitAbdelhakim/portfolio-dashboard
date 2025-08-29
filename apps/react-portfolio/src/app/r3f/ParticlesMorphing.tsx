import { useControls } from 'leva';

export default function ParticlesMorphing() {
  const { position, scale, color } = useControls('Cube', {
    position: {
      value: { x: 4, y: 0 },
      step: 0.1,
      min: 0,
      max: 4,
    },
    scale: {
      value: 1,
      min: 1,
      max: 3,
      step: 0.5,
    },
    color: 'mediumpurple',
  });

  return (
    <>
      <mesh position={[position.x, position.y, 0]} scale={scale}>
        <boxGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <torusKnotGeometry />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
}
