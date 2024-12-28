// next.config.js
require('dotenv').config();

module.exports = {
  env: {
    TOKEN: process.env.TOKEN,
    CHAT_ID:process.env.CHAT_ID
  },
  // أي تكوينات إضافية هنا
};
