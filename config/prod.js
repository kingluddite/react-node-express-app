// prod.js - production keys here!!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  randomCookieKey: process.env.RANDOM_COOKIE_KEY,
  googleRedirectURI: 'http://localhost:5000/auth/google'
};
