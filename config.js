//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "+17864445476";
global.owner = process.env.OWNER_NUMBER || "+17864445476";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZUZjd3M2w5K0o2elN0RmxZZkhHK3hUSWVaU3JETTJOVkZnQkRnUDNWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJSb2hkQUYwR2RpV2JvWUZSR3crTUx3QmpqU2ZCVzJBVkQ0eEJPaHVpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRkZINnFWbGoxUkdyblY1T2RVZVRIZ2czaVlnckJseWJSVWJOWnY3RTBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnVmdMRnAyb1c4WFpsNmdQcFNXWUNqRHdqSlp3USsza2RRU3pUZkRpM2tVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCcEpzOU9rWUZYQi81dFdsamZ1ZFpZL0tqZjFIYUcrcFhPVGNoQWc1SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhQTXZ6U1J3TUdJd3BaRkNOcGRDZzNlUjk4S09yUURUVWNZV1FuR0RwQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hqTTFQL3pWSi9WNTUvcStnVE40MHdPd2s4LzZOd0s3em5VUUtMVVhGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL25xYnI3WVVnNEE5SnBIbURVNjRIR1J5anNSTzhsTFJJM1h2SU5yNUUzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl6SGc5YUZTNHZkOUJDcitFN3o3VFVHNjB5VmVXMkFxdGRsUEdLbkwwTXBGQWg4M3RWQnFjVzNDUmh3TFBDNG5vZFE2cGxmcGRJTmFWa0UyeDdNZkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiI1OFY5T1dnQmRORWl5Nk9qTXowRW53NFFWY0U4QjFMaXB6NWh3d3ZuN2NvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE3ODY0NDQ1NDc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjBGQ0IwREQ3MzY3NDRFMUY5ODJCMzEyRjlGM0MyOEE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE4NjQwMDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iko3Nk9sR1VBVE51aUFBN0lUSUFwbkEiLCJwaG9uZUlkIjoiZjQ3ZGYwZTUtODU1Mi00YjQxLTg5ZGMtNGQyYzAyY2IzNjAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQxOVBPeW9ZRGN5WGVRWXNxWkNxUS90OUpYQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoc2pkOHluTmlQWjdkT2tPRVNrSllaOFBkYUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODRBNktLUkUiLCJtZSI6eyJpZCI6IjE3ODY0NDQ1NDc2Ojg3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIPwnZqr8J2as/Cdmq/wnZq0IPCdkJLwnZqr8J2Qi/Cdm4HwnZqr8J2au/Cdmq/wnZqq8J2atSDwnZqr8J2atPCdmq/wnZq08J2QmPCdmrPwnZqv8J2QlPCdkJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uQTR3SVF0TXZvdVFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl0M3VKdW91OWlJMUpDSTRBTkE5V01VSmJCcEJsaFBFT1dxdVhBeXBCbEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJaTWxLU0t0OUgzUDZVZ3FwQzhlWCt5dlhNQUNyQlhOMVVodUxna0FsQk1JQVptcmhOK25QRFlRNjk1SXhmdG5CeTQrczhnTEdZZTJYYWRqdnVRMUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnZEZyckhxN1dvclJReGpDV0pBNmQ0RUJIZFc3TkduMnVOZGhSSjhaMHM0ZUUxRkExelJyZmJsOWVobXhtV2dQRy9wdjhneVAxbHhqM2x3V1BtUWdBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE3ODY0NDQ1NDc2Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZiZDdpYnFMdllpTlNRaU9BRFFQVmpGQ1d3YVFaWVR4RGxxcmx3TXFRWlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE4NjQwMDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkxRIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
