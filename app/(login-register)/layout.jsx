import Background from 'app/components/Login/Background'

export default function LoginLayout ({ children }) {
  return (
    <>
      <Background />
      <div>
        {children}
      </div>
    </>
  )
}
