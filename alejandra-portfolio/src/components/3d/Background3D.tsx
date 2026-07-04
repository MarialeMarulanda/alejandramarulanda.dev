"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WaveFieldCanvas = dynamic(() => import("./WaveFieldCanvas"), {
  ssr: false,
});

export default function Background3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduced) setEnabled(true);
  }, []);

  if (!enabled) return null;
  return <WaveFieldCanvas />;
}
