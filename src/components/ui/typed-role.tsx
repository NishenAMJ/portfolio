"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const ERASE_MS = 35;
const HOLD_MS = 1600;

export function TypedRole({ roles }: { roles: string[] }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let role = 0;
    let len = roles[0].length;
    let erasing = true;
    let timer = setTimeout(tick, HOLD_MS);

    function tick() {
      len += erasing ? -1 : 1;
      setText(roles[role].slice(0, len));
      if (erasing && len === 0) {
        erasing = false;
        role = (role + 1) % roles.length;
      } else if (!erasing && len === roles[role].length) {
        erasing = true;
        timer = setTimeout(tick, HOLD_MS);
        return;
      }
      timer = setTimeout(tick, erasing ? ERASE_MS : TYPE_MS);
    }

    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <div className="typed-role" aria-label={roles[0]}>
      <span className="prompt">&gt;_</span>
      <span aria-hidden="true">{text}</span>
      <i className="caret" aria-hidden="true" />
    </div>
  );
}
