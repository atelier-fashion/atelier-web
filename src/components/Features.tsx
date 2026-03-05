import { Camera, Swatches, Sparkle } from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: Camera,
    title: "Smart Closet",
    description: "Snap, tag, and organize your wardrobe with AI.",
  },
  {
    icon: Swatches,
    title: "Capsule Builder",
    description: "Build curated capsules around your forever pieces.",
  },
  {
    icon: Sparkle,
    title: "Style DNA",
    description: "Personalized outfit suggestions tailored to your vibe.",
  },
];

export default function Features() {
  return (
    <section className="bg-tan-light px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-center text-3xl font-bold text-noir md:text-4xl">
          What Makes Atelier Different
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white/60 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/20">
                <feature.icon size={28} weight="light" className="text-noir" />
              </div>
              <h3 className="font-serif mt-6 text-xl font-semibold text-noir">
                {feature.title}
              </h3>
              <p className="mt-3 text-noir/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
