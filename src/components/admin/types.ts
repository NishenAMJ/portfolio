import type { Profile } from "@/types/portfolio";

export type EditorSectionProps = {
  profile: Profile;
  persist: (next: Profile) => void;
};
