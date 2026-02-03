export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 tracking-widest text-md uppercase transition focus:outline-none";

  const variants = {
    primary: "bg-gold text-white hover:bg-[#b18f52]",
    outline: "border border-gold text-white hover:bg-gold",
    dark: "bg-black text-white hover:bg-black/80",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
