// 'use client'

// import { motion } from 'framer-motion'

// import money from 'app/components/svgs/money.svg'
// import clip from 'app/components/svgs/clip.svg'
// import note from 'app/components/svgs/note.svg'
// import wallet from 'app/components/svgs/wallet.svg'

// export default function Accounts () {
//   const rainItems = ['💸', '🏠', '🙏🏻', '👍🏻']
//   const rain = [{ clip: <h1>hola</h1> }, { money: <h1>chau</h1> }]

//   const rainQuanty = 50

//   // for (let i = 0; i < rainQuanty; i++) {
//   //   const random = () => Math.floor(Math.random() * 4)
//   //   rain.push(rainItems[random()])
//   // }

//   return (
//     <div className='flex'>
//       {rain.map((item, index) => (
//         <motion.div
//           key={index}
//           className='text-5xl'
//           animate={{ y: 1000, opacity: 0 }}
//           transition={{
//             duration: Math.random() * 5
//           }}
//         >
//           {item}
//         </motion.div>
//       ))}
//     </div>
//   )
// }
