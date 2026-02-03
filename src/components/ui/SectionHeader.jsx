export default function SectionHeader({
  title,
  align = "center",
  size = "lg",
  className = "",
}) {
  const alignMap = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  const sizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`${alignMap[align]} mb-24 ${className}`}>
      <h2
        className={`${sizeMap[size]} tracking-widest font-semibold uppercase text-gold`}
      >
        {title}
      </h2>

      <div
        className={`mt-2 h-[3px] bg-gold ${
          align === "center"
            ? "mx-auto w-1/4"
            : align === "left"
              ? "w-24"
              : "ml-auto w-24"
        }`}
      />
    </div>
  );
}
