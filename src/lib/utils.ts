import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

/**
 * Size breakpoints in pixels based on Tailwind CSS defaults.
 *
 * https://tailwindcss.com/docs/responsive-design
 */
export const breakpointPixels = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
