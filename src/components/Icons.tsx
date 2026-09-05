import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>
export function Arrow({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M4 12h15M12 5l7 7-7 7" />
    </svg>
  )
}
export function ArrowUpRight({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  )
}
export function Check({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}
export function Phone({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"
      />
    </svg>
  )
}
export function Pin({ className = '', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
