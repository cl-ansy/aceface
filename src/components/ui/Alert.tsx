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
        `flex items-center justify-center rounded-base border-2 border-black bg-main px-4
        py-4 text-sm font-bold shadow-base sm:px-8 sm:py-5 md:text-base`,
        className,
      )}>
      <TbAlertOctagonFilled className="mr-3 min-h-[18px] min-w-[18px] md:min-h-[24px] md:min-w-[24px]" />
      {message}
    </div>
  );
}
