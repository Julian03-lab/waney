const Home = (props) => (
  <svg
    width={800}
    height={800}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.36 2.126a3.583 3.583 0 0 0-4.718 0L3.28 7.691a4.538 4.538 0 0 0-1.55 3.416v8.06a3.583 3.583 0 0 0 3.583 3.583h13.375a3.583 3.583 0 0 0 3.583-3.583v-8.06a4.538 4.538 0 0 0-1.55-3.416l-6.362-5.565ZM10 16.114a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path
          fill='#fff'
          transform='rotate(-90 12.24 10.51)'
          d='M0 0h21.51v20.541H0z'
        />
      </clipPath>
    </defs>
  </svg>
)

export default Home
