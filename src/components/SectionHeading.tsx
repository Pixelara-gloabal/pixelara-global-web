type SectionHeadingProps = { eyebrow?: string; title: string; description?: string }

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
