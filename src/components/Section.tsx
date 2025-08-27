export default function Section({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`py-14 md:py-20 ${className}`}>{children}</section>
  )
}

