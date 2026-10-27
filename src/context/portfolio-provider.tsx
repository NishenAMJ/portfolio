"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Profile, Project } from "@/types/portfolio";
import { initial } from "@/data/portfolio";

const ProfileContext = createContext<{
  profile: Profile;
  save: (p: Profile) => boolean;
}>({ profile: initial, save: () => false });

const storageKey = "janith-portfolio-v1";

function subscribeProfile(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-change", callback);
  };
}

function readProfile() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeProfile,
    readProfile,
    () => null,
  );
  const profile = useMemo(() => {
    try {
      const saved = JSON.parse(snapshot || "null");
      if (
        saved &&
        typeof saved.headline === "string" &&
        typeof saved.email === "string" &&
        typeof saved.github === "string" &&
        saved.github.startsWith("https://") &&
        typeof saved.resume === "string" &&
        (!saved.resume ||
          saved.resume.startsWith("data:application/pdf;base64,") ||
          /^\/[\w./-]+\.pdf$/.test(saved.resume)) &&
        typeof saved.resumeName === "string" &&
        typeof saved.available === "boolean" &&
        Array.isArray(saved.projects) &&
        saved.projects.every(
          (p: Project) =>
            p &&
            typeof p.id === "string" &&
            typeof p.title === "string" &&
            typeof p.description === "string" &&
            typeof p.category === "string" &&
            typeof p.published === "boolean" &&
            Array.isArray(p.tags) &&
            p.tags.every((t: unknown) => typeof t === "string"),
        ) &&
        Array.isArray(saved.skills) &&
        saved.skills.every((s: unknown) => typeof s === "string")
      )
        return { ...initial, ...saved } as Profile;
    } catch {
      /* Malformed saved data falls back to the original portfolio. */
    }
    return initial;
  }, [snapshot]);
  function save(p: Profile) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(p));
      window.dispatchEvent(new Event("portfolio-change"));
      return true;
    } catch {
      return false;
    }
  }
  return (
    <ProfileContext.Provider value={{ profile, save }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
