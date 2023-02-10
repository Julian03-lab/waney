import Link from 'next/link'

export default function OptionButton ({ text, href, optionStyle, icon }) {
  return (
    <Link href={href} className={`flex gap-2 bg-black-secondary justify-center items-center rounded-xl ${optionStyle} text-white font-bold shadow hover:text-primary-100 text-center text-lg`}>
      <i className={`bi bi-${icon} text-2xl`} />
      {text}
    </Link>
  )
}
