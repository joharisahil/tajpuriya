import Link from "next/link";

export function Hero({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="container-shell section-gap">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Manufacturer and trader</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
              Explore Products
            </Link>
            <Link href="/contact" className="rounded-full border border-brand-line px-6 py-3 text-sm font-semibold text-brand-navy">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
