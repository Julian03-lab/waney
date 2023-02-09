export default function Modal ({ children }) {
  return (
    <div className='absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black-primary bg-opacity-50 z-10 flex'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        {children}
      </div>
    </div>
  )
};
