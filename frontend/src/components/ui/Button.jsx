const Button = ({ children, variant = "primary", href, onClick, download }) => {
  const classes =
    variant === "primary" ? "btn-primary" : "btn-outline"

  if (href) {
    return (
      <a href={href} download={download} className={`inline-block ${classes}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button