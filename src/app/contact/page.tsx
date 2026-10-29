import type { Metadata } from "next";
import { ContactForm } from "@/components/experience/contact-form";
import { initial as profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";

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
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="lead">
            Get in touch about internships, project collaborations, or an opportunity
            to build something together. I’m always happy to connect and hear about
            meaningful software projects.
          </p>
          <div className="contact-methods">
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span className="icon-tile"><MailIcon /></span>
              <span><small>Email</small><span>{profile.email}</span></span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-method" href={profile.github} target="_blank" rel="noreferrer">
              <span className="icon-tile"><GithubIcon /></span>
              <span><small>GitHub</small><span>@{profile.github.split("/").filter(Boolean).pop()}</span></span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-method" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="icon-tile"><LinkedinIcon /></span>
              <span><small>LinkedIn</small><span>Janith Nishen</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
