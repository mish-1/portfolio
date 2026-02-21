function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-header">
        <h2>{title}</h2>
        <span className="section-line" aria-hidden="true" />
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default Section
