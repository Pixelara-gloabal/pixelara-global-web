type ProcessStepProps = { number: number; title: string; description: string }

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return <article><p>{String(number).padStart(2, '0')}</p><h3>{title}</h3><p>{description}</p></article>
}

export default ProcessStep
