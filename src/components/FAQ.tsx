type FAQItem = { question: string; answer: string }
type FAQProps = { items: FAQItem[] }

function FAQ({ items }: FAQProps) {
  return <section aria-label="Frequently asked questions">{items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
}

export default FAQ
