import Link from 'next/link'

export default function OptionButton ({ text, href, optionStyle, icon }) {
  return (
    <Link href={href} className={`flex flex-col bg-black-secondary justify-center items-center rounded-xl ${optionStyle} text-white text-base font-bold shadow-md hover:text-primary-100 `}>
      <i className={`bi bi-${icon} text-3xl`} />
      {text}
    </Link>
  )
}
