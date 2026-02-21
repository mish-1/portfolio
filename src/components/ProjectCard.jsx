function ProjectCard({ title, description, stack, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="stack">{stack}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  )
}

export default ProjectCard
