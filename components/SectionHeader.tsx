export default function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-yellow-500 font-mono text-xs uppercase mb-2">
        {label}
      </p>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 max-w-xl">{description}</p>
    </div>
  );
}