
//contact details
global.ownernomer = "2347088910126"
global.owner = ["2347088910126"]
global.ownername = "C0D3BR34K3R"
global.ytname = "YT: "
global.socialm = "GitHub: "
global.location = "Nigeria, Lagos"
global.url1 = 'https://whatsapp.com/channel/0029Vb2uWlmDp2QArNAJ320g' //
global.url2 = 'https://whatsapp.com/channel/0029VbBQODd3LdQZcDSbMf0e' //
global.linkgc = 'https://chat.whatsapp.com/HmMuVlm3ckSADXSiXM31ai?mode=wwt'
global.delayjpm = 3500
global.ownernumber = '2347088910126'  //creator number
global.ownername = 'C0D3BR34K3R' //owner name
global.botname = 'DarkBug-V1' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'CODEBREAKER\n\nContact: +2347088910126'

//console view/theme
global.themeemoji = '🕷️'
global.wm = "SPIDER."

//theme link
global.link = 'https://whatsapp.com/channel/0029VbBQODd3LdQZcDSbMf0e'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Be Used By Premium User Only" Want Premium? Chat Owner`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})