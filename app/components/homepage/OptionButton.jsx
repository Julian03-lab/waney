export default function OptionButton ({ text, onClick, optionStyle, icon }) {
  return (
    <button className={`flex flex-col bg-black-secondary justify-center items-center rounded-xl ${optionStyle} text-white text-xs font-semibold shadow-md`} onClick={onClick}>
      <i className={`bi bi-${icon} text-2xl`} />
      {text}
    </button>
  )
}
