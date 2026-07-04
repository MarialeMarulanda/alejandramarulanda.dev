"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Particle grid simulating a radio-signal surface. The cursor emits
// ripples across the field, like a transmitter touching the spectrum.
const SPACING = 0.28;

const ROSE = new THREE.Color(0.78, 0.14, 0.4);
const CORAL = new THREE.Color(0.93, 0.4, 0.22);

function WaveField({ lowPower }: { lowPower: boolean }) {
  // Fewer particles on phones — keeps the animation smooth on weaker GPUs/battery budgets.
  const COLS = lowPower ? 46 : 92;
  const ROWS = lowPower ? 25 : 50;
  const FIELD_W = COLS * SPACING;
  const FIELD_H = ROWS * SPACING;

  const geoRef = useRef<THREE.BufferGeometry>(null);
  const planeRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const ndc = useRef(new THREE.Vector2(-10, -10));
  const ripple = useRef(new THREE.Vector3(999, 999, 0));

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      ndc.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const { positions, colors } = useMemo(() => {
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        positions[i * 3] = (c - COLS / 2) * SPACING;
        positions[i * 3 + 1] = (r - ROWS / 2) * SPACING;
        positions[i * 3 + 2] = 0;
        colors[i * 3] = ROSE.r;
        colors[i * 3 + 1] = ROSE.g;
        colors[i * 3 + 2] = ROSE.b;
        i++;
      }
    }
    return { positions, colors };
  }, [COLS, ROWS]);

  const tmpColor = useMemo(() => new THREE.Color(), []);
  const hitPoint = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Project the cursor onto the tilted field so ripples track it exactly.
    if (planeRef.current) {
      raycaster.setFromCamera(ndc.current, camera);
      const hits = raycaster.intersectObject(planeRef.current, false);
      if (hits.length > 0) {
        hitPoint.copy(hits[0].point);
        planeRef.current.worldToLocal(hitPoint);
        ripple.current.lerp(hitPoint, 0.12);
      }
    }

    const rx = ripple.current.x;
    const ry = ripple.current.y;

    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];

        // Base swell — two slow crossing waves.
        let z =
          0.32 * Math.sin(x * 0.55 + t * 1.1) * Math.cos(y * 0.42 + t * 0.7);

        // Cursor ripple — damped radial wave around the pointer.
        const dx = x - rx;
        const dy = y - ry;
        const d2 = dx * dx + dy * dy;
        z += 0.85 * Math.exp(-d2 / 5.5) * Math.sin(Math.sqrt(d2) * 2.4 - t * 4.5);

        positions[i * 3 + 2] = z;

        // Height tint: valleys stay rose, crests warm up to coral.
        const k = THREE.MathUtils.clamp((z + 0.6) / 1.6, 0, 1);
        tmpColor.copy(ROSE).lerp(CORAL, k);
        colors[i * 3] = tmpColor.r;
        colors[i * 3 + 1] = tmpColor.g;
        colors[i * 3 + 2] = tmpColor.b;
        i++;
      }
    }

    if (geoRef.current) {
      geoRef.current.attributes.position.needsUpdate = true;
      geoRef.current.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group rotation={[-Math.PI / 2.55, 0, 0]} position={[0, -1.3, 0]}>
      <mesh ref={planeRef} visible={false}>
        <planeGeometry args={[FIELD_W, FIELD_H]} />
        <meshBasicMaterial />
      </mesh>
      <points frustumCulled={false}>
        <bufferGeometry ref={geoRef}>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function WaveFieldCanvas({ lowPower = false }: { lowPower?: boolean }) {
  return (
    <div className="bg3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.2, 6.2], fov: 60 }}
        dpr={lowPower ? [1, 1] : [1, 1.5]}
        gl={{ antialias: !lowPower, alpha: true, powerPreference: "low-power" }}
      >
        <WaveField lowPower={lowPower} />
      </Canvas>
    </div>
  );
}
