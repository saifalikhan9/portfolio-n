import { cva } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
  "bg-primary flex  items-center shadow-custom dark:shadow-custom-dark rounded-lg p-1 md:py-1 md:px-2 text-xs",
);

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(badgeVariants(), className)}
      data-slot="badge"
      {...props}
    />
  );
}

export { Badge, badgeVariants };
