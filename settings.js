

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8016751619:AAEO9NQEt6BbdhIg0Wr94gvtVmbH488RWeo" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "DARKBUG-V1" //your bot name
global.OWNER_NAME = "@darkcodex_emp" //your name with sign @
global.OWNER = ["https://t.me/darkcodex_emp"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7528793664"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/4qxu1a.png' //your bot pp

global.owner = global.owner = ['2347030626048'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})