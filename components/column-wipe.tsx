"use client";

import { useEffect, useState } from "react";

export default function ColumnWipe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const COUNT = isMobile ? 8 : 5;

  return (
    <div
      className={[
        "pointer-events-none fixed inset-0 z-9999 flex",
        isMobile ? "flex-col" : "flex-row",
      ].join(" ")}
    >
      {Array.from({ length: COUNT }).map((_, i) => (
        <div
          key={i}
          className="col-wipe bg-blue-950"
          style={{
            width: isMobile ? "100%" : "100%",
            height: isMobile ? "100%" : "100%",
            transform: isMobile ? "scaleX(0)" : "scaleY(0)",
            transformOrigin: isMobile ? "left center" : "top center",
            flex: 1,
          }}
        />
      ))}
    </div>
  );
}