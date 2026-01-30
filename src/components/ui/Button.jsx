export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 tracking-widest text-xs uppercase transition focus:outline-none";

  const variants = {
    primary: "bg-[#c8a35d] text-white hover:bg-[#b18f52]",
    outline: "border border-[#c8a35d] text-[#c8a35d] hover:bg-[#c8a35d]/10",
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
