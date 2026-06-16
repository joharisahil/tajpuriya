"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export function CopyAction({
  value,
  label,
  disabled = false
}: {
  value: string;
  label: string;
  disabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    if (disabled || !value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      disabled={disabled || !value}
      className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-brand-navy disabled:cursor-not-allowed disabled:opacity-50"
      aria-label={`Copy ${label}`}
    >
      <Copy className="h-4 w-4" />
      {copied ? "Copied" : `Copy ${label}`}
    </button>
  );
}
