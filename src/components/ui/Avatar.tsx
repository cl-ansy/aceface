import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Avatar({
  children,
  className,
  imageUrl,
}: {
  children?: ReactNode;
  className?: ClassValue;
  imageUrl?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: cn({ [`url(${imageUrl})`]: false }),
      }}
      className={cn(
        "flex justify-center items-center h-8 w-8 font-semibold rounded-full border-2 border-black bg-white bg-cover bg-center",
        className
      )}
    >
      {children}
    </div>
  );
}
