/* # Exclusively from raashii
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum yazhuth muthe\n🗡🗡"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'zavatar3 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP + '\n\n----------ᴢᴀʀᴀʙᴏᴛ-----------' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'zavatar3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=queenamdipublic&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP + '\n\n----------ᴢᴀʀᴀʙᴏᴛ-----------' })

  }));

}