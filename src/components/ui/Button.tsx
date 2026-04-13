interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = "px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-200 dark:shadow-red-900",
    outline: "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}