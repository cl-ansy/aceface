import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-base border-2 border-black bg-white px-3 py-2 text-sm
          font-base ring-offset-white selection:bg-main selection:text-black file:border-0
          file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black
          disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
