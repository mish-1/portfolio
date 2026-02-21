function Navbar() {
  const links = [
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="top-nav" aria-label="Main">
      {links.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
