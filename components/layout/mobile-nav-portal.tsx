"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MobileNav } from "./mobile-nav";

export function MobileNavPortal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(<MobileNav />, document.body);
}