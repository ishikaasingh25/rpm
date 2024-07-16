const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'add your firebase database URL'
});

const db = admin.firestore();

module.exports ={admin,db};
