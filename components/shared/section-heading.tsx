export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-label text-brand-green">{eyebrow}</p> : null}
      <h2 className="mt-3 text-h2 text-brand-navy text-balance">{title}</h2>
      {description ? <p className="mt-4 text-body text-neutral-700">{description}</p> : null}
    </div>
  );
}
