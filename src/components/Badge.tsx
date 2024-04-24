import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

export default function Badge({
  className,
  text,
}: {
  className?: ClassValue;
  text: string;
}) {
  return (
    <div
      className={cn(
        "w-min rounded-base border-2 border-black bg-main px-2.5 py-0.5 text-sm font-base",
        className
      )}
    >
      {text}
    </div>
  );
}
