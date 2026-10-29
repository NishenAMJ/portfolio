"use client";

import { initial as profile } from "@/data/portfolio";
import { useState, type FormEvent } from "react";

export function ContactForm() {

  const [message, setMessage] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
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
      <h2>Send a message</h2>
      <form onSubmit={submit}>
        <div className="form-grid">
          <label>
            Name
            <input
              name="name"
              required
              maxLength={100}
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              required
              type="email"
              autoComplete="email"
            />
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
