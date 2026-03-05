export default function Footer() {
  return (
    <footer className="border-t border-noir/5 bg-cream px-6 py-10 text-center">
      <p className="font-serif text-lg text-noir/60">
        Atelier &mdash; Your Personal Fashion Partner
      </p>
      <p className="mt-2 text-sm text-noir/40">
        &copy; {new Date().getFullYear()} Atelier. All rights reserved.
      </p>
    </footer>
  );
}
