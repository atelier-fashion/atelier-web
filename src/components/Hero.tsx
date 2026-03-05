export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-teal to-tan px-6 text-center">
      {/* Logo */}
      <div className="mb-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/atelier-logo.png"
          alt="Atelier"
          width={512}
          height={280}
          className="mx-auto"
        />
      </div>

      {/* Headline */}
      <h1 className="font-serif text-5xl font-bold tracking-tight text-noir md:text-6xl lg:text-7xl">
        Your Closet. Elevated.
      </h1>

      {/* Body */}
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-noir/80 md:text-xl">
        Atelier is the intuitive connection between your closet and your most
        iconic self. We curate, personalize, and tailor your style so every
        outfit is effortless.
      </p>

      {/* CTA */}
      <a
        href="#waitlist"
        className="mt-10 inline-block rounded-xl bg-peach px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-peach-dark hover:shadow-xl"
      >
        Join the Waitlist
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-noir/40"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
