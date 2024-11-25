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
global.sudo = process.env.SUDO || "237656774167";
global.owner = process.env.OWNER_NUMBER || "237687038167";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hrVXl2aC9qWnhvUjRkaGxUelhwUWV6TXJjZnFzdmtnSEVBalZOV2lraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFVOeHd1Y3dLbEgxWTFsbXdtR2RBbE9ZTlJKd0dPQzFWYkNPYXRkSS9qRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S0djRWJXVFhRaXJnVEsyWU92dmc0bUxQR2V3ZTdMK09aN2w0Y05DYUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwbTFnWGFQOVA1WU9xSkEzS1FET3h0SG9BbStFcDQ3ZVdHeGVpaElMZUJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQMVI2UzFHVTZrTVNNZ3NiVURlVXpqcWlGMUxUU2NBVWpjdVRvdUpDRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNYcDBMVmxDOW9acVVKVXZ5NldvRmR6eVBWMGExZ0M4VkkraUhMMWtXMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dmL1ROWkpEQmJZRHlydWpTaXJrVURaaTBRd2tvNGxGUlJydVZHQk5IZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWphUkdzdHo5cWw2amhiYS9BdEpBTTdqUEZLbFZRTkluczN0MWdSUkRYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBDU3ZmN1lnejNuU2NMVklpUkVNSUZKbWx1UDAwNFN0Q1dVTWdIeWx2UU9ZOVZ0cWluUVJoOUdXSmlBaGc4K2MyenhqRjJ4UVJVUlRMd3NwUkFNcUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJBbzBPY3drQ0lXWlk2Qm4xZS80THhrK0tsdTdMcVpzN3cvQVlseGVOUG1zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyZ2JrOTI1d1FZNnlQTHFQLXlQVG9BIiwicGhvbmVJZCI6IjMyNDY2ZTY2LWY0ZWItNDllNi04MDRlLTA5YWFjNjVkNTAxMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4NEZrMG9nSjRrdWN0YmxPejRVdHhBZUpCczA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGN0dG1QRVRQa212bDAwK1ZHUlJ2bDlpTHljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxKS1JIUThQIiwibWUiOnsiaWQiOiIyMzc2ODcwMzgxNjc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNIE8gWiBBIFIgVCDjgYIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lEMXdwZ0RFTFNiazdvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1QdHZwNFJhMlRwMTBJaFRCT3Bra1BKcUo1ZXcrUzlMK29pSStWMXQ1RGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im03MVRFWUdOdkd3QkJoQ1pSajdlMERoaXdidHFETFpub25SNnJXcmtQRXVSZXlZSEROSHFoUkt4c1dBWnVZSnRLaHYzVzJ5ckpmVG1tZmNmaS9CTUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwbmNIZllkNW1BZWJkVTRrT1MwSkNZQlJRNWg2bkFEbUFZK1RURzd2QjUzQnB6ek12ZURnOUxQUVg1ZFZTN0FxNzdNSXptQUw4TmRVN3U3TTByeE9CZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY4NzAzODE2NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpqN2I2ZUVXdGs2ZGRDSVV3VHFaSkR5YWllWHNQa3ZTL3FJaVBsZGJlUTUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI1NjIzNjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmIzIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
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
