"use client";

import { useProfile } from "@/context/portfolio-provider";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const { profile } = useProfile();
  const [message, setMessage] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\nOpportunity: ${data.get("type")}\n\n${data.get("message")}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry from " + data.get("name"))}&body=${encodeURIComponent(body)}`;
      setMessage(
        "Your email app will open with your message. Send it from there.",
      );
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(body)
        .then(() =>
          setMessage("Message copied. You can send it to me on LinkedIn."),
        )
        .catch(() => setMessage("Please send your message through LinkedIn."));
    } else {
      setMessage("Please send your message through LinkedIn.");
    }
  }
  return (
    <section id="contact" className="contact-card panel">
      <h2>Have an opportunity in mind?</h2>
      <p>
        I’m looking for Software Engineering and Full-Stack internship
        opportunities. Let’s build something meaningful.
      </p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/janithnishen/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        {profile.email && (
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        )}
      </div>
      <form onSubmit={submit}>
        <div className="form-grid">
          <label>
            Your name
            <input
              name="name"
              placeholder="Sarah Jenkins"
              required
              maxLength={100}
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              placeholder="sarah@company.com"
              required
              type="email"
              autoComplete="email"
            />
          </label>
          <label>
            Company
            <input
              name="company"
              placeholder="Your company"
              autoComplete="organization"
              maxLength={150}
            />
          </label>
          <label>
            Opportunity
            <select name="type">
              <option>Software Engineering Internship</option>
              <option>Full-Stack Internship</option>
              <option>Project collaboration</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <label>
          Message
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Tell me a little about your team and the opportunity…"
          />
        </label>
        <div className="form-bottom">
          <small>
            {profile.email
              ? "Opens your email app"
              : "Send your message via LinkedIn"}
          </small>
          <button className="button primary" type="submit">
            {profile.email ? "Prepare email ↗" : "Copy message →"}
          </button>
        </div>
        <p className="form-status" role="status">
          {message}
        </p>
      </form>
    </section>
  );
}
