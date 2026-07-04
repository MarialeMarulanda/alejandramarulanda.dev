"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WaveFieldCanvas = dynamic(() => import("./WaveFieldCanvas"), {
  ssr: false,
});

export default function Background3D() {
  const [enabled, setEnabled] = useState(false);
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setLowPower(window.innerWidth < 768);
    if (!reduced) setEnabled(true);
  }, []);

  if (!enabled) return null;
  return <WaveFieldCanvas lowPower={lowPower} />;
}
