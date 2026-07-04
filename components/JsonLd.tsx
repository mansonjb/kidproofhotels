// Renders a JSON-LD block. Data is trusted (built server-side from our own
// content), so dangerouslySetInnerHTML is safe here.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
