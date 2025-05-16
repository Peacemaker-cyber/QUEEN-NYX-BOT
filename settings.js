//PEACEMAKER-CYBER 
//YouTube: 
//Telegram: t.me/peacemaker



const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: " //ur yt chanel name
global.socialm = "IG : Peacemaker hunter" //ur github or insta name
global.location = "KENYA" //ur location

//new
global.botname = 'PEACE MD👸' //ur bot name
global.ownernumber = 254726293089' //ur owner number
global.ownername = '©Peacemaker' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029Vb5O5AGEawdqTdMRj514" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.wagc = "https://chat.whatsapp.com/C9uSfX68fg4F4hpbRhX7CW" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idch = '120363322892680943@newsletter'
global.themeemoji = '🪀'
global.wm = "Peacemaker🔥"
global.botscript = 'https://whatsapp.com/channel/0029Vb5O5AGEawdqTdMRj514' //'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F' //script link
global.packname = "PEACE MD👸"
global.author = "Precious Ayomide"
global.creator = "254726293089@s.whatsapp.net"
global.xprefix = '.'
global.antidelete = true
global.premium = ["254726293089"] // Premium User
global.hituet = 0
global.chatModeUsers = {}; // Store chat mode status per user

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v4' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
