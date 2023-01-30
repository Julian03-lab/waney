const admin = require('firebase-admin')

const serviceAccount = require('app/services/firebase-keys.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const getUser = admin.auth().getUser()
