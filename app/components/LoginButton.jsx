import React from 'react'

export default function Button ({ action, text, icon, buttonstyle }) {
  return (
    <button className={`${buttonstyle} py-[6px] px-[12px] flex flex-row gap-1 rounded-full w-full leading-8 place-content-center`} onClick={action}>
      {icon && <div className='p-1 bg-white rounded-full'>{icon}</div>}
      {text}
    </button>
  )
}
