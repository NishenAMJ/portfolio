import { notFound } from "next/navigation";
import { AdminScreen } from "@/components/admin/admin-screen";

// Edits are stored in the visitor's own browser, so the manager is local-only.
export default function Page() {
  if (process.env.NODE_ENV === "production") notFound();
  return <AdminScreen />;
}
