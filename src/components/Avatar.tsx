import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

export default function Avatar({
  className,
}: // imageUrl,
{
  className?: ClassValue;
  // imageUrl: string;
}) {
  return (
    <div
      style={
        {
          // backgroundImage: `url(${imageUrl})`,
        }
      }
      className={cn(
        "h-8 w-8 rounded-full border-2 border-black bg-main bg-cover bg-center",
        className
      )}
    ></div>
  );
}
