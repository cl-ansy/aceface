import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { RENDER_PRECISION } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toRenderPrecision(num: number): number {
  return Number(num.toFixed(RENDER_PRECISION));
}

export function randomInRange(min: number, max: number): number {
  return toRenderPrecision(Math.random() * (max - min) + min);
}

export function degreesToRadians(degrees: number): number {
  return toRenderPrecision((degrees * Math.PI) / 180);
}
