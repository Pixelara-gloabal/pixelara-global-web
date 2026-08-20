type IndustryCardProps = { name: string; summary: string }

function IndustryCard({ name, summary }: IndustryCardProps) {
  return <article><h3>{name}</h3><p>{summary}</p></article>
}

export default IndustryCard
