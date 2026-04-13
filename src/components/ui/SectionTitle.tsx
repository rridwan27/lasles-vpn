interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
}