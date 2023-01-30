export default function Modal ({ children }) {
  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='relative w-full h-full flex items-center justify-center'>
        <div className='relative w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md'>
          {children}
        </div>
      </div>
    </div>
  )
};
