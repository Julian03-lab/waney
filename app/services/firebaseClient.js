import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDO5bq5qjUOEfdz4GTlz4P7LxULqQwyS1o',
  authDomain: 'waney-bafe7.firebaseapp.com',
  projectId: 'waney-bafe7',
  storageBucket: 'waney-bafe7.appspot.com',
  messagingSenderId: '590833827297',
  appId: '1:590833827297:web:72db46ce6cdf18a24126a0',
  measurementId: 'G-ZHHG4QPYG3'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
