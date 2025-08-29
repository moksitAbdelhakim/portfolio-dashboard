import { useControls } from 'leva';

export default function ParticlesMorphing() {
  const { position, scale, color } = useControls('Sphere', {
    position: {
      value: { x: 2, y: 2 },
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
    <mesh position={[position.x, position.y, 0]} scale={scale}>
      <sphereGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
