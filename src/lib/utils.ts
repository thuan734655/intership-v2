import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefix relative image paths (e.g., "/uploads/...") with backend base URL.
// Uses NEXT_PUBLIC_BACKEND_URL so it is available on the client.
export function resolveImageUrl(path: string | undefined | null): string {
  if (!path) return ""
  if (/^https?:\/\//i.test(path)) return path
  const base = (process.env.NEXT_PUBLIC_BACKEND_URL || '').replace(/\/$/, '')
  if (!base) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}