"use client";

import { useState, FormEvent } from "react";
import { addToWaitlist } from "@/lib/firebase";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      await addToWaitlist(email.trim().toLowerCase());
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  if (status === "success") {
    return (
      <section id="waitlist" className="bg-cream px-6 py-24 text-center">
        <div className="mx-auto max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/20">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-teal"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className="font-serif mt-6 text-3xl font-bold text-noir">
            You&apos;re on the list!
          </h2>
          <p className="mt-3 text-noir/70">
            We&apos;ll let you know when Atelier is ready for you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-cream px-6 py-24 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-serif text-3xl font-bold text-noir md:text-4xl">
          Be the First to Know
        </h2>
        <p className="mt-4 text-noir/70">
          Join the waitlist and get early access when we launch.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-noir/10 bg-white px-5 py-3.5 text-noir placeholder:text-noir/40 focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/30"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-xl bg-peach px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-peach-dark hover:shadow-lg disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>

        {status === "error" && (
          <p className="mt-3 text-sm text-red-500">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
