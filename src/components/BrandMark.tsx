import Image from 'next/image'
import Link from 'next/link'

export default function BrandMark() {
  return (
    <Link
      href="/"
      className="brand-mark"
      aria-label="GP Auto's — naar de homepage"
    >
      <span className="brand-symbol">
        <Image src="/logo.png" alt="" width={110} height={110} priority />
      </span>
      <span className="brand-wordmark">
        GP AUTO&apos;S<span>VAG SPECIALIST</span>
      </span>
    </Link>
  )
}
