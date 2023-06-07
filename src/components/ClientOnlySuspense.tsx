import React, { useEffect, useState } from "react";

export default function ClientOnlySuspense({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <React.Suspense fallback={<div />} {...delegated}>
      {children}
    </React.Suspense>
  );
}
