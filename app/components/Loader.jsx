import { RotatingSquare } from 'react-loader-spinner'
export default function Loader () {
  return (
    <RotatingSquare
      ariaLabel='rotating-square'
      visible
      color='#72F0FF'
      height={200}
      width={200}
      wrapperClass='flex justify-center items-center h-screen'
      strokeWidth='10'
    />
  )
}
