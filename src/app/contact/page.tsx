import type { Metadata } from "next";
import { ContactForm } from "@/components/experience/contact-form";

export const metadata: Metadata = {
  title: "Contact | Janith Nishen",
};

export default function ContactPage() {
  return (
    <main className="container page contact-page">
      <div className="eyebrow">CONTACT</div>
      <h1>
        Let’s connect<span className="accent">.</span>
      </h1>
      <p className="lead">
        Get in touch about internships, project collaborations, or an opportunity
        to build something together.
      </p>
      <ContactForm />
    </main>
  );
}
