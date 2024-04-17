import { ClassValue } from "clsx";
import { TbAlertOctagonFilled } from "react-icons/tb";

import { cn } from "@/lib/utils";

export default function Alert({
  className,
  message,
}: {
  className?: ClassValue;
  message: string;
}) {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-center justify-center rounded-base border-2 border-black bg-main py-4 sm:px-8 sm:py-5 px-4 font-bold text-sm md:text-base shadow-base",
        className
      )}
    >
      <TbAlertOctagonFilled className="mr-3 md:min-h-[24px] md:min-w-[24px] min-h-[18px] min-w-[18px]" />
      {message}
    </div>
  );
}
