import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-shell section-gap">
      <h1 className="text-4xl font-semibold text-brand-navy">Page not found</h1>
      <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white">
        Go home
      </Link>
    </div>
  );
}
