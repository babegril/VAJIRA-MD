const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=jENjURgZ#r_xvY4JTnuLwWgRgODp6Xeo3FMj7UXLs6_FUlu53ldM' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 2000,
STATUS_REPLY_MESSAGE: '👀𝗦𝗧𝗔𝗧𝗨𝗦 𝗥𝗘𝗣𝗟𝗬 𝗠𝗦𝗚
*`ඔයාගේ ස්ටෙටස් බැලුවා🗿 🍓🤍`*

*මෙය..හුදෙක් මගෙ පහසුව සදහා පමනයි..🙂🍃*',    
ALIVE:  process.env.ALIVE  || '>  SAVI'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
