import { cn } from "../../utils/cn";

export default function Section({
  children,
  className,
  as: Component = "section",
}) {
  return (
    <Component className={cn("py-16 md:py-24 lg:py-32", className)}>
      {children}
    </Component>
  );
}
