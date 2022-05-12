// PUNYA SAYA [ RIMURUBOTZ ] JANGAN UBAH THX TO YA
// DILARANG DI PERJUAL BELIKAN
const respon = require('./lib/respon.js');
const iklan = require('./admin/iklan.js');
const { generateWAMessageFromContent, proto, generateWAMessage, downloadContentFromMessage } = require('@adiwajshing/baileys');
const { color, bgcolor } = require('./lib/color')
const fs = require('fs');
const imgbb = require('imgbb-uploader')
const hx = require('hxz-api');
const ffmpeg = require('fluent-ffmpeg')
const chalkanim = require('chalk-animation');
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process")
const { fetch, downloadSaveImgMsg } = require('./lib/anu.js');
const { wait, simih, getBuffer, h2k } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const session = require('./session.json');
const { addATM, confirmATMM, addKoinUser, checkATMuser, bayarLimit, confirmATM, limitAdd } = require('./lib/limitatm.js')
moment.tz.setDefault('Asia/Jakarta').locale("id");
const setting = JSON.parse(fs.readFileSync('./admin/settings.json')) 
const tebakgambar = JSON.parse(fs.readFileSync('./game/tebakgambar.json'))
const tebakkimia = JSON.parse(fs.readFileSync('./game/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./game/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./game/tebakbendera.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./game/tebakjenaka.json'))
termux = fs.readFileSync(`./media/sticker/termux.webp`) 
cangkul = fs.readFileSync(`./media/sticker/cangkul.webp`) 
anti = fs.readFileSync(`./media/sticker/anti.webp`) 
bahasa = "id"
apa = "other"
const prem = []
const antilink = []
const antitag = []
const antivirtex = [] 
prefix = setting.prefix
const { namabot, kodeprem, instagram, youtube, namaowner, linkgrub, nomerowner, gopay, dana, pulsa, donasi } = setting
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`}
runtime = process.uptime()
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = hehe = async (nayla, nay, store) => {
try {
const type = Object.keys(nay.message)[0];
const body = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId || nay.text) : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const command1 = body.slice(5).trim().split(/ +/).shift().toLowerCase()
const cmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const isCmd = body.startsWith(prefix)
const time = moment(new Date()).format("HH:mm");
const text = nay.message.conversation;
const isGroup = nay.key.remoteJid.endsWith('@g.us');
const from = nay.key.remoteJid;
const content = JSON.stringify(nay.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net';
const ownerNumber = [`${nomerowner}@s.whatsapp.net`]
const botName = nayla.user.name;
const pushname = nay.pushName;
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid;
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";
const isOwner = ownerNumber.includes(sender)
const isPrem = prem.includes(sender) || isOwner	
const isAntiLink = isGroup ? antilink.includes(from) : false 
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
const isAntitag = isGroup ? antitag.includes(from) : false 			
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
await nayla.sendReadReceipt(from, nay.key.participant, [nay.key.id]);
fake = fs.readFileSync(`./media/image/fake.jpg`)
nay1 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fake}}}
if (!isGroup && isCommand) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
if (isCommand && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  
const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, {text:teks.trim() }, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, {text:teks.trim()}, {quoted: nay, contextInfo: {"mentionedJid": memberr}})}					
const reply = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: nay1});
}
const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
const sendText = (teksnya, fiturnya) => {
const buttons = [
{buttonId: `.${fiturnya}`, buttonText: {displayText: `NEXT`}, type: 1},
]
const buttonMessage = {
text: "Loading...",footer: teksnya,buttons: buttons,headerType: 1}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
}
const prosess = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/prosess.jpg`)}}}})
};
const errorr = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/error.jpg`)}}}})
};
const sukses = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/sukses.jpg`)}}}})
};
nayla.sendnew = async (satu, dua, tiga) => {return await generateWAMessage(satu, dua, {...tiga ,userJid: nayla.authState.creds.me.id,upload: nayla.waUploadToServer})}      
const sendMenu = async (satu, dua, tiga, empat) => {
var menu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "YOUTUBE📽","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "GITHUB👤","url": "https://github.com/abdibot/vanzzofc1"}},
{"quickReplyButton": {"displayText": "SEWA","id": `${prefix}donasi`}},
{"quickReplyButton": {"displayText": "MYGRUB","id": `${prefix}mygrub`}},
{"quickReplyButton": {"displayText": "SPEED","id": `${prefix}ping`}}
]}}}, {})
nayla.relayMessage(satu, menu1.message, { messageId: menu1.key.id })
}
const sendMenuu = async (satu, dua, tiga, empat) => {
var menuu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "YOUTUBE📽","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "GITHUB👤","url": "https://github.com/abdibot/vanzzofc1"}},
{"quickReplyButton": {"displayText": "SEWA","id": `${prefix}sewa`}},
{"quickReplyButton": {"displayText": "MYGRUB","id": `${prefix}mygrub`}},
{"quickReplyButton": {"displayText": "ALL MENU","id": `${prefix}allmenu`}}
]}}}, {})
nayla.relayMessage(satu, menuu1.message, { messageId: menuu1.key.id })
}
const nextt = (satu, dua, tiga, empat) => {
const buttons0 = [{buttonId: `${prefix + satu}`, buttonText: {displayText:dua}, type: 1}]
const buttonMessage0 = {image: {url:tiga},caption: empat, footerText: 'Loading...',buttons: buttons0,headerType: 4}
nayla.sendMessage(from, buttonMessage0, {quoted:nay1})}
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "NIH",footerText: 'Loading...',buttons: buttons,headerType: 4}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
})
} catch (e) {
reply("Emoji error, silahkan masukkan emoji lain\nNOTE : Cukup masukkan 1 emoji")
}
}
const hacker = (satu, dua, tiga, empat) => {
const A = [
{buttonId: `${prefix + satu} yakin`, buttonText: {displayText: 'YAKIN!'}, type: 1},
{buttonId: `${prefix + satu} tidak`, buttonText: {displayText: 'TIDAK!'}, type: 1}]
const B = { image: {url: tiga}, caption: dua + " saat ini, apakah anda ingin hack " + dua, footerText: 'loading...', buttons: A,headerType: 4}
hack1 = fs.readFileSync(`./media/image/${dua}2.jpg`)
hack2 = empat          
if (!q)return nayla.sendMessage(from, B, {quoted:nay})
if ((args[0]) === 'yakin') {	
const A = [{buttonId: `${prefix + satu} termux`, buttonText: {displayText: 'TERMUX!'}, type: 1},
{buttonId: `${prefix + satu} cangkul`, buttonText: {displayText: 'CANGKUL!'}, type: 1}]
const B = {text: `SILAHKAN PILIH METODE DI BAWAH INI`, footer: `Loading...`, buttons: A, headerType: 1}
nayla.sendMessage(from, B, {quoted:nay})
} else if ((args[0]) === 'tidak') {reply("Baiklah")
} else if ((args[0]) === 'termux') {nayla.sendMessage(from, {sticker : termux}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE TERMUX😱😤`} } }}) 	
setTimeout( () => {
nayla.sendMessage(from, {image:hack1, caption:hack2}, {quoted:nay1})
}, 10000)  
} else if ((args[0]) === 'cangkul') {nayla.sendMessage(from, {sticker : cangkul}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE CANGKUL😱😤`} } }}) 	
setTimeout( () => {
nayla.sendMessage(from, {image:hack1, caption:hack2}, {quoted:nay1})
}, 10000)  
}
};
const txt = nay.message.conversation 
 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakgambar.json`, JSON.stringify(tebakgambar))
}
} 		
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
}
} 										
if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakkimia[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
}
} 										
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
}
} 										
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
}
} 										
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete caklontong[sender.split('@')[0]]
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
}
} 
var premi = "×"
if (isPrem) {premi = '√'} 
var owneri = "×"
if (isOwner) {owneri = '√'} 
var antilinki = "×"
if (isAntiLink) {antilinki = '√'} 
var antivirtexi = "×"
if (isAntiVirtex) {antivirtexi = '√'} 
var antitagi = "×"
if (isAntitag) {antitagi = '√'} 
if (isGroup) { 
var infoq = `[ *INFORMATION* ]
┃│[ × ] => *NOT*
║│[ √ ] => *YES*
┃│» *PREM* : ${premi}
║│» *OWNER* : ${owneri}
┃│» *ANTITAG* : ${antilinki}
║│» *ANTIVIRTEX* : ${antivirtexi}
┃│» *ANTITAG* : ${antitagi}`
} // GROUP
if (!isGroup) { 
var infoq = `[ *INFORMATION* ]
┃│[ × ] => *NOT*
║│[ √ ] => *YES*
┃│» *PREM* : ${premi}
║│» *OWNER* : ${owneri}`
}

/* LIMIT & UANG  & REGISTER */ 
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const isRegistered = _registered.includes(sender)
var limitawal = "500"
if (isOwner) {limitawal = '99999999999'} 
if (isPrem) {limitawal = '99999999999'}  
var dftar = "ANDA BELUM TERDAFTAR"	
if(isRegistered) { dftar = "ANDA SUDAH TERDAFTAR"};
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return reply("YAHHH LIMIT KAMU UDAH HABIS")
reply("YAHHH LIMIT KAMU TINGGAL " + limitCounts)
found = true}}
if (found === false) {
let obj = { id: sender, limit: 1}
_limit.push(obj)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
reply("SISA LIMIT ANDA : ???")}} 
const isLimit = (sender) =>{ 
if (isOwner && isPrem) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {let limits = i.limit
if (limits >= limitawal ) {position = true
reply("MAAF LIMIT KAMU HABIS")
return true
} else {
_limit
position = true
return false}}}
if (position === false) {
const obj = { id: sender, limit: 1 }
_limit.push(obj)
fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
return false}} 
daftazz = "KAMU BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN PILIH PILIHAN DIBAWAH, APAKAH ANDA INGIN BERGABUNG?"
var checkATM = checkATMuser(sender)
if (checkATM === undefined) { addATM(sender)}
if (budy == prefix + "korupsi bansos") { 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname));
const uangsaku = 10000
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 10000 UANG BANSOS, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)}
if (budy == prefix + "korupsi uangnegara") { 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname));
const uangsaku = 100000
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 100000 UANG NEGARA, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)}
if (budy == prefix + "korupsi gajikerja") { 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("SEDANG KORUPSI, SILAHKAN TUNGGU 1 MENIT")
const uangsaku = 1000
setTimeout( () => {
addKoinUser(sender, uangsaku)
sukses(`SUKSES KORUPSI 1000 UANG GAJI KERJA SELAMA 1 MINGGU, WOW ANDA ADA USER KORUSPI YANG HEBAT!! MAMAK MU PASTI BANGGA`)
}, 60000)}
switch (cmd) {
case 'dompet': case 'uang': case 'atm':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const kantong = checkATMuser(sender)
const dua2 = [
{buttonId: `${prefix}funsiuang`, buttonText: {displayText: 'FUNGSI UANG & LIMIT?'}, type: 1}]
const satu2 = {
text: "UANG KAMU : " + kantong, buttons: dua2,headerType: 1}
nayla.sendMessage(from, satu2, {quoted:nay1})
break
case 'korupsi':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const dua3 = [
{buttonId: `${prefix}korupsi gajikerja`, buttonText: {displayText: 'GAJI KERJA (FREE)'}, type: 1},
{buttonId: `${prefix}korupsi bansos`, buttonText: {displayText: 'BANSOS (VIP)'}, type: 1},
{buttonId: `${prefix}korupsi uangnegara`, buttonText: {displayText: 'UANG NEGARA(VIP)'}, type: 1}]
const satu3 = {
text: "HHEE? APAKAH ANDA BENAR BENAR INGIN KORUPSI?? BAIKLAH, BAYANGKAN ANDA SEKARANG ADA MEGAWATX, DAN SILAHKAN PILIH JALUR KORUPSI DIBAWAH", buttons: dua3,headerType: 1}
nayla.sendMessage(from, satu3, {quoted:nay1})
break
case 'funsiuang':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply("LIMIT? APA ITU LIMIT? LIMIT DI GUNAKAN UNTUK MENGGUNAKAN 1 FITUR PER 1 LIMIT, JIKA LIMIT KAMU HABIS MAKA KAMU TIDAK BISA MENGGUNAKAN FITUR BOT LAGI, SEDANGKAN UANG UNTUK MEMBELI LIMIT, SILAHKAN GUNAKAN COMMAND" + ` ${prefix}buylimit UNTUK MEMBELI LIMIT`)
break
case 'buylimit':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(!q) return reply("PENGEN BUY BERAPA?? HARGA 1 LIMIT = 1000 UANG," + ` CARA PEMBELIAN??\n• CONTOH : ${prefix + command} jumlah\n• MISAL : ${prefix + command} 3`)
payout = body.slice(10)
if(isNaN(payout)) return await reply('limit harus berupa angka!!')
const koinPerlimit = 1000
const total = koinPerlimit * payout
if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
if ( checkATMuser(sender) >= total ) {
confirmATM(sender, total)
bayarLimit(sender, payout)
await reply(`*SUKSES*\n• *NOMINAL* : ${payout}\n• *HARGA* : ${koinPerlimit}/limit\n• *SISA UANG* : ${checkATMuser(sender)}`)
} 
break
case 'cleardatabase':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(!isOwner) return reply("ONLY OWNER")
if (!q) { const dua1 = [
{buttonId: `${prefix + cmd} yes`, buttonText: {displayText: 'YES'}, type: 1},
{buttonId: `${prefix + cmd} not`, buttonText: {displayText: 'NOT'}, type: 1}]
const satu1 = {
text: "Apakah anda yakin menghapus database??? ini akan menghapus keseluruhan(Semua) limit, daftar",footer: 'Loading... y/n?',buttons: dua1,headerType: 1}
nayla.sendMessage(from, satu1, {quoted:nay1})}
if ((args[0]) === 'yes') {
// DAFTAR
_registered.splice(_registered)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
// LIMIT
_limit.splice(_limit)
fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
reply("SUKSES MENGHAPUS SEMUA DATABASE")}
if ((args[0]) === 'not') {reply("BAIKLAH")}
break
case 'daftar':
if (isRegistered) return  reply("HEHEHE KAMU UDAH DAFTAR SEBELUMNYA")                 
const dua1 = [
{buttonId: `${prefix + cmd} yes`, buttonText: {displayText: 'YES'}, type: 1},
{buttonId: `${prefix + cmd} not`, buttonText: {displayText: 'NOT'}, type: 1}]
const satu1 = {
text: "INGIN BERGABUNG? SILAHKAN PILIH PILIHAN DIBAWAH",footer: 'Loading... y/n?',buttons: dua1,headerType: 1}
if (!q) return nayla.sendMessage(from, satu1, {quoted:nay1})
if ((args[0]) === "yes") {
_registered.push(`${sender.split("@")[0]}@s.whatsapp.net`)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
reply("SUKSES, ANDA SEKARANG TELAH BERGABUNG DI DATABASE BOT")
await limitAdd(sender)
addATM(sender)}
if ((args[0]) === "not") {reply("OKELAH")}
break
case 'cekdaftar':
reply(dftar)
break
case 'ceklimit': case 'limit':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
checkLimit(sender)
break
 
case 'tebakgambar':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
nyz117 = await getBuffer(nyz116)
console.log(jawaban)
nayla.sendMessage(from, {image:nyz117, caption: "Tebak yaa, *NOTE* : Jawaban yang benar akan saya reply"}, { quoted: nay}).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./game/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
reply(`Waktu habis, jawaban : ` + jawaban)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./game/tebakgambar.json", JSON.stringify(tebakgambar))
}
break 
case 'caklontong':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
}
break           
case 'tebaklirik':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
}
break
case 'tebakkimia':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakkimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
})
await sleep(30000)
if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakkimia[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
}
break
case 'tebakjenaka':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
})
await sleep(30000)
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
}
break
case 'tebakbendera':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
}
break
case 'setbahasa':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
if (!q) return nayla.sendMessage(from, { text : `listbahasa?\n${prefix}setbahasa id\n${prefix}setbahasa en`}, {quoted:nay1})
if ((args[0]) === 'id') {sukses("SUKSES")
bahasa = "id"
} else if ((args[0]) === 'en') {sukses("SUKSES")
bahasa = "en"
} else {
nayla.sendMessage(from, { text : `listbahasa?\n${prefix}setbahasa id\n${prefix}setbahasa en`}, {quoted:nay1})
}
case 'setprefix':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
sukses("SUKSES")
prefix = args[0]
break
case 'promote':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply("Masukan nomor yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
nomor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [nomor],"add")
} catch (e) {
reply('Maaf error')
}
break
case 'kick':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mention,"remove")
} catch (e) {
reply('Maaf error')
}
break
case 'resetlink':
case 'revoke':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
await nayla.groupRevokeInvite(from)
break
case 'linkgroup':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateDescription(from, q)
break
case 'setname':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateSubject(from, q);
break
case 'owner':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaowner}\n`
+ 'ORG:Ini saya;\n'
+ `TEL;type=CELL;type=VOICE;waid=${nomerowner}:+${nomerowner}\n`
+ 'END:VCARD';
nayla.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
case 'sewa':
case 'sewabot':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const donasii =`${donasi}\n• PULSA ${pulsa}\n• DANA ${dana}\n• GOPAY ${gopay}`
reply(donasii)
break
case 'allhelp':
case 'allmenu':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const menu = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│•°”˜˜”°•.¸☆ ★ ☆¸.•°”˜˜”°•.¸☆
┃│╔══╗╔═╗╔══╗╔══╗★ ★
║│║╔╗║║║║╚╗╔╝╠══║☆¸.•°*
┃│║╔╗║║║║─║║─║══╣★
║│╚══╝╚═╝─╚╝─╚══╝♡￥☆
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│~ Heyy ${pushname} <3
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│${infoq}
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *MENU SIMPLE* ]
┃│» *${prefix}donasi*
║│» *${prefix}owner*
┃│» *${prefix}mygrub*
║│» *${prefix}listprem*
┃│» *${prefix}getprem*
║│» *${prefix}iklan3*
┃│» *${prefix}iklan2*
║│» *${prefix}iklan1*
┃│» *${prefix}scbot*
║│» *${prefix}chatowner*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *OWNER MENU* ]
┃│» *${prefix}setprefix*
║│» *${prefix}cleardatabase*
┃│» *${prefix}setbahasa*
║│» *${prefix}speed*
┃│» *${prefix}addprem*
║│» *${prefix}dellprem*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *GROUP MENU* ]
┃│» *${prefix}add*
║│» *${prefix}kick*
┃│» *${prefix}promote*
║│» *${prefix}demote*
┃│» *${prefix}resetlink*
║│» *${prefix}linkgroup*
┃│» *${prefix}setname*
║│» *${prefix}setdesc*
┃│» *${prefix}antilink*
║│» *${prefix}antitag*
┃│» *${prefix}antivirtex*
║│» *${prefix}hidetag*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *AUDIO MENU* ]
┃│» *${prefix}audio1*
║│» *${prefix}audio2*
┃│» *${prefix}audio3*
║│» *${prefix}audio4*
┃│» *${prefix}audio5*
║│» *${prefix}audio6*
┃│» *${prefix}audio7*
║│» *${prefix}audio8*
┃│» *${prefix}audio9*
║│» *${prefix}audio10*
┃│» *${prefix}audio11*
║│» *${prefix}audio12*
┃│» *${prefix}audio13*
║│» *${prefix}audio14*
┃│» *${prefix}audio15*
║│» *${prefix}audio16*
┃│» *${prefix}audio17*
║│» *${prefix}audio18*
┃│» *${prefix}audio19*
║│» *${prefix}audio20*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *WALLPAPER* ]
┃│» *${prefix}wallml*
┃│» *${prefix}wallpubg*
║│» *${prefix}wallcode*
┃│» *${prefix}wallrandom*
║│» *${prefix}wallneon*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *STICK-MENU* ]
┃│» *${prefix}tampar*
║│» *${prefix}tendang*
┃│» *${prefix}jijik*
║│» *${prefix}ketawa*
┃│» *${prefix}diam*
║│» *${prefix}kaget*
┃│» *${prefix}nangis*
║│» *${prefix}peluk*
┃│» *${prefix}pukul*
║│» *${prefix}marah*
┃│» *${prefix}takut*
║│» *${prefix}sedih*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
┃│[ *TAG-MENU* ]
┃│» *${prefix}pakgirl*
║│» *${prefix}nolep*
┃│» *${prefix}pakboy*
║│» *${prefix}jago*
┃│» *${prefix}halal*
║│» *${prefix}pintar*
┃│» *${prefix}bego*
║│» *${prefix}haram*
┃│» *${prefix}sadgirl*
║│» *${prefix}sadboy*
┃│» *${prefix}jelek*
║│» *${prefix}jahat*
┃│» *${prefix}hebat*
║│» *${prefix}baik*
┃│» *${prefix}cantik*
║│» *${prefix}wibu*
┃│» *${prefix}beban*
║│» *${prefix}ganteng*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *CEK-MENU* ]
┃│» *${prefix}pakgirlcek*
║│» *${prefix}nolepcek*
┃│» *${prefix}pakboycek*
║│» *${prefix}jagocek*
┃│» *${prefix}halalcek*
║│» *${prefix}pintarcek*
┃│» *${prefix}begocek*
║│» *${prefix}haramcek*
┃│» *${prefix}sadgirlcek*
║│» *${prefix}sadboycek*
┃│» *${prefix}jelekcek*
║│» *${prefix}jahatcek*
┃│» *${prefix}hebatcek*
║│» *${prefix}baikcek*
┃│» *${prefix}cantikcek*
║│» *${prefix}wibucek*
┃│» *${prefix}bebancek*
║│» *${prefix}gantengcek*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *TEXTPRO-MENU* ]
┃│» *${prefix}berry*
║│» *${prefix}transformer*
┃│» *${prefix}metal*
║│» *${prefix}peridot*
┃│» *${prefix}halloween*
║│» *${prefix}thunder*
┃│» *${prefix}toxic*
║│» *${prefix}sketch*
┃│» *${prefix}magma*
║│» *${prefix}purple*
┃│» *${prefix}circuit*
║│» *${prefix}cracked*
┃│» *${prefix}juice*
║│» *${prefix}blue*
┃│» *${prefix}metallic*
║│» *${prefix}impressive*
┃│» *${prefix}scfi*
║│» *${prefix}horror*
┃│» *${prefix}realistic*
║│» *${prefix}rainbow*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *HACK-MENU* ]
┃│» *${prefix}hackmatahari*
┃│» *${prefix}hackbulan*
║│» *${prefix}hackbapak*
┃│» *${prefix}hacksatelit*
║│» *${prefix}hacklautan*
┃│» *${prefix}hackfreefire*
║│» *${prefix}hackbts*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *RANDOM-MENU* ]
┃│» *${prefix}artinama*
┃│» *${prefix}artimimpi*
║│» *${prefix}resepmasakan*
┃│» *${prefix}katajago*
║│» *${prefix}besarkecil*
┃│» *${prefix}jumlahhuruf*
║│» *${prefix}jumlahangka*
┃│» *${prefix}infogempa* 
║│» *${prefix}balikangka*
┃│» *${prefix}wikipedia*
║│» *${prefix}balikhuruf*
┃│» *${prefix}bilangangka*
║│» *${prefix}holoh*
┃│» *${prefix}heleh*
║│» *${prefix}huluh*
┃│» *${prefix}hilih*
║│» *${prefix}halah*
┃│» *${prefix}kapital* 
║│» *${prefix}attp*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *SEARCH-MENU* ]
┃│» *${prefix}sfile*
┃│» *${prefix}rexdl*
║│» *${prefix}ytsearch*
┃│» *${prefix}cersex*
║│» *${prefix}thelazy*
┃│» *${prefix}shopee*
║│» *${prefix}amazon*
┃│» *${prefix}arena*
║│» *${prefix}grubwa*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *NEWS-MENU* ]
┃│» *${prefix}antara*
║│» *${prefix}okezone*
┃│» *${prefix}kompas*
║│» *${prefix}berita*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *INFO-MENU* ]
┃│» *${prefix}coronameninggal*
┃│» *${prefix}infohoax*
║│» *${prefix}jadwalbola*
┃│» *${prefix}jamdunia*
║│» *${prefix}jam*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *ISLAMI-MENU* ]
┃│» *${prefix}kisahnabi*
║│» *${prefix}asmaulhusna*
┃│» *${prefix}quran*
║│» *${prefix}hadist*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *NSFW-MENU* ]
┃│» *${prefix}yuri*
║│» *${prefix}thighs*
┃│» *${prefix}pussy*
║│» *${prefix}panties*
┃│» *${prefix}orgy*
║│» *${prefix}ass*
┃│» *${prefix}ahegao*
║│» *${prefix}bdsm*
┃│» *${prefix}blowjob*
║│» *${prefix}cuckold*
┃│» *${prefix}ero*
║│» *${prefix}cum*
┃│» *${prefix}femdom*
║│» *${prefix}foot*
┃│» *${prefix}gangbang*
║│» *${prefix}glasses*
┃│» *${prefix}jahy*
║│» *${prefix}masturbation*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *GAME-MENU* ]
┃│» *${prefix}tebakgambar*
║│» *${prefix}tebaklirik*
┃│» *${prefix}tebakkimia*
║│» *${prefix}tebakjenaka*
┃│» *${prefix}tebakbendera*
║│» *${prefix}caklontong*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *EMOTE-MENU* ]
┃│» *${prefix}emojilg*
║│» *${prefix}emojipedia*
┃│» *${prefix}emojimoji*
║│» *${prefix}emojijoy*
┃│» *${prefix}emojiskype*
║│» *${prefix}emojifecabook*
┃│» *${prefix}emojitwitter*
║│» *${prefix}emojiwhatsapp*
┃│» *${prefix}emojimicrosoft*
║│» *${prefix}emojisamsung*
┃│» *${prefix}emojigoogle*
║│» *${prefix}emojiapple*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *TRENDING* ]
┃│» *${prefix}trenbekasi*
┃│» *${prefix}trendepok*
║│» *${prefix}trenpekanbaru*
┃│» *${prefix}trensurabaya*
║│» *${prefix}trenmakassar*
┃│» *${prefix}trenbandung*
║│» *${prefix}trenjakarta*
┃│» *${prefix}trenmedan*
║│» *${prefix}trenpalembang*
┃│» *${prefix}trensemarang*
║│» *${prefix}trentangerang*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *KERANG AJAIB* ]
┃│» *${prefix}berapa*
┃│» *${prefix}siapa*
║│» *${prefix}kapan*
┃│» *${prefix}dimana*
║│» *${prefix}apakah*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *QUOTESS NEW* ]
┃│» *${prefix}quotesanime*
┃│» *${prefix}quotesbucin*
║│» *${prefix}quoteskehidupan*
┃│» *${prefix}quotesgalau*
║│» *${prefix}quotesrandom*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *DOWNLOAD* ]
┃│» *${prefix}ytmp4*
║│» *${prefix}ytmp3*
┃│» *${prefix}ytaudio*
║│» *${prefix}ytvideo*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *SEPAKBOLA* ]
┃│» *${prefix}rodri*
║│» *${prefix}vinicius*
┃│» *${prefix}robert*
║│» *${prefix}erling*
┃│» *${prefix}oliver*
║│» *${prefix}ricardo*
┃│» *${prefix}mbappe*
║│» *${prefix}rashford*
┃│» *${prefix}messi*
║│» *${prefix}ronaldo*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *ATM MENU* ]
┃│» *${prefix}dompet*
┃│» *${prefix}korupsi*
║│» *${prefix}buylimit*
┃│» *${prefix}daftar*
║│» *${prefix}cekdaftar*
┃│» *${prefix}limit*
║│» *${prefix}ceklimit*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
┃│» *TERAPKAN* [ 5M ]
║│» Memakai masker
┃│» Mencuci tangan
║│» Menjaga jarak
┃│» Menjauhi kerumunan
║│» Membatasi mobilitas
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *THX TO* ]
┃│» *RIMURUBOTZ*
║│» *LORD RYNZ*
┃│» *ADIWAJSHING*
║│» *MEGAWATI*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
await sendMenu(from, menu, "𝙃𝙞 𝙎𝘼𝙔𝘼 𝘼𝘿𝘼𝙇𝘼𝙃 𝘽𝙊𝙏 𝙑𝘼𝙉𝙕𝙕𝙊𝙁𝘾", await nayla.sendnew(from, {video: {url: "./media/video/menu.mp4", caption: menu}, gifPlayback: true}))
break
case 'menu':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
menuu = `Halo *${pushname}*\nBOT(BUILD-OPERATE-TRANSFER) adalah program komputer yang dijalankan di Whatsapp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, BOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman, dan kemungkinan memiliki sedikit bug, Adanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`
await sendMenuu(from, menuu, `𝙃𝙄 𝙎𝘼𝙔𝘼 𝘼𝘿𝘼𝙇𝘼𝙃 𝘽𝙊𝙏 𝙈𝙄𝙇𝙄𝙆 𝙑𝘼𝙉𝙕𝙕 𝙊𝙁𝘾`, await nayla.sendnew(from, {video: {url: "./media/video/menuu.mp4", caption: menuu}, gifPlayback: true}))
break
case 'desk':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply(`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
» *PERATURAN*
» Bot ini tidak menyimpan media/foto yang anda kirimkan
» Gunakan bot ini sebaik mungkin
» Jangan spam fitur/command bot
» Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
» Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
» *HUKUMAN*
» Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
» Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`)
break
case 'mygrub': case 'mygrup':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply("Join-ya!?\n" + linkgrub)
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 	
try{
prosess("[❗] SEDANG DIPROSESS")						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
nayla.sendMessage(from, {image : nyz3, caption:"SUKSES" }, {quoted:nay}) 						
} catch (e) {
errorr(e)
}
break
case 'audio1': case 'audio2': case 'audio3': case 'audio4': case 'audio5': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10':
case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
try{
nayla.sendMessage(from,{ audio: { url: `media/audio/nyz-${command}.m4a`},ptt:true, mimetype: 'audio/mp4'}, {quoted:{key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/audio.jpg`)}}}})
} catch (e) {
errorr("ERROR")
}
break
case 'tampar': case 'tendang': case 'jijik': case 'ketawa': case 'diam': case 'kaget': case 'nangis': case 'peluk': case 'pukul': case 'marah': case 'takut': case 'sedih':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!isPrem) return reply(respon.onlyprem(pushname))
if (!isGroup) return reply(respon.onlyGroup(pushname));
try{
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
stickrndm = fs.readFileSync(`./media/sticker/${command}.webp`)
nayla.sendMessage(from, {sticker : stickrndm}, {quoted: { key: { fromMe: false, participant: `${meention}`, ...({}) }, message: { "extendedTextMessage": { "text": `😄`} } }}) 		 		   
} catch (e) {
errorr("ERROR")
}
break 
case 'ganteng': case 'cantik': case 'jelek': case 'bego': case 'pintar': case 'jago': case 'nolep': 
case 'beban': case 'baik': case 'jahat': case 'haram': case 'halal': case 'pakboy': case 'pakgirl': 
case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
try{
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
stickrndm = fs.readFileSync(`./media/sticker/panic.webp`)
nayla.sendMessage(from, {sticker : stickrndm}, {quoted: { key: { fromMe: false, participant: `${meention}`, ...({}) }, message: { "extendedTextMessage": { "text": `Uhh... gw yang ter${command} di sini....`} } }}) 		 		   
} catch (e) {
errorr("ERROR")
}
break
case 'pakgirlcek': case 'nolepcek': case 'pakboycek': case 'jagocek': case 'halalcek':
case 'pintarcek': case 'sadgirlcek': case 'haramcek': case 'begocek': case 'sadboycek': case 'cantikcek':
case 'jahatcek': case 'jelekcek': case 'hebatcek': case 'baikcek': case 'wibucek': case 'bebancek': case 'gantengcek':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]					
const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
N = `• *NAME* : ${pushname}\n`,
N += `• *COMMAND* : ${command}\n`,
N += `• *RATE* : *${randomnay1}${randomnay2}% :v*`
reply(N)
break
case 'ping': case 'speed':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
const speed = require('performance-now')
let timestampi = speed();
let latensii = speed() - timestampi
spd = `=> *SPEED* : ${latensii.toFixed(4)}`
reply(spd)
break			
case 'addprem':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isOwner) return reply(respon.ownerbot(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
prem.push(meention)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
break				
case 'dellprem':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isOwner) return reply(respon.ownerbot(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meentionn = nay.message.extendedTextMessage.contextInfo.mentionedJid
prem.splice(meentionn, 1)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
break
case 'listprem':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply(prem)
break 
case 'getprem':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (isPrem) return reply("Anda telah menjadi user premium sebelumnya")
if (!q) return reply("Silahkan masukkan kode premium, untuk mendapatkan kode premium silahkan hubungi owner")
if ((args[0]) === kodeprem) {
prem.push(`${sender.split("@")[0]}@s.whatsapp.net`)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
} else {
reply("kode yang anda gunakan salah, untuk mendapatkan kode premium silahkan hubungi owner")
}
break
case 'iklan':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const buttons = [
{buttonId: `${prefix}iklan1`, buttonText: {displayText: 'IKLAN1'}, type: 1},
{buttonId: `${prefix}iklan2`, buttonText: {displayText: 'IKLAN2'}, type: 1},
{buttonId: `${prefix}iklan3`, buttonText: {displayText: 'IKLAN3'}, type: 1}
]
const p = {
text: `IKLAN BY ${namaowner}`,
footer: `Loading...`,
buttons: buttons,
headerType: 1
}
nayla.sendMessage(from, p, {quoted:nay1})
break
case 'chat':
case 'chatowner':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Text nya mana")
nayla.sendMessage(`${nomerowner}@s.whatsapp.net`, {text: `• *NAME* : ${pushname}\n• *MESSAGE* : ${q}`}, {quoted:nay1})
sukses("SUKSES")
break
case 'iklan1':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan1())
break
case 'iklan2':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan2())
break
case 'iklan3':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan3())
break
case 'hackmatahari':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack Matahari👍 ini dia info detail matahari saat ini\nn\n• *Suhu permukaan* : 9.999 K\n• *Massa* : 9,99999 kg\n• *Radius rata-rata* : 999.999 km\n• *Usia* : 9.999 miliar tahun\n• *Jarak ke Bumi* : 999,9 juta km\n• *Gravitasi* : 999 m/s²\n• *Bulan* : 9999 Florence, 99999 Orcus`
hacker(command, "matahari", "https://asset.kompas.com/crops/vbavZpYBxOAA83ocaYh-5_xPSf4=/98x0:698x400/750x500/data/photo/2017/08/02/4269061701.jpg", ingfo)
break
case 'hackbulan':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bulan saat ini\n\n• *Jarak ke Bumi* : 999,999 km\n• *Luas permukaan* : 9,999×999 km2 (9,999 Bumi)\n• *Apogee* : 999,999 km; (9,9999 AU)\n• *Bujur node menaik* : Mundur satu revolusi dalam 99,9 tahun\n• *Diameter sudut* : 9,99 sampai 99,9 menit busur\n• *Eksentrisitas* : 9,9999\n• *Gravitasi permukaan* : 9,999 m/s2 (9,9999 g)`
hacker(command, "bulan", "https://media.suara.com/pictures/653x366/2014/10/02/shutterstock_67681837-e1412258071910.jpg", ingfo)
break
case 'hackbapak':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bapak dalam keadaan tersenyum, selamat bapak ini sudah resmi menjadi milik anda, jika anda tidak ingin menerima bapak ini silahkan donasi kan saja bapak ini ke anak yang membutuhkan\n\n• Nama : Jamaluddin\n• tanggal lahir : 1990\n• Alamat : Bogor\n• Jenis Kelamin : pria\n• Agama : Gatau\n• Berat badan : 99kg\n• Tinggi Badan : 2km\n• Hobi : gay`
hacker(command, "bapak", "https://i.ibb.co/xS9DB0p/Bapak-Ganteng-on-Instagram-Selamat-pagi-sahabat-Bapak-nikmat-sehat-dan-nikmat-iman-adalah-rejeki-pal.jpg", ingfo)
break
case 'hacksatelit':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack satelit!! sekarang satelit berada 99.999 km (99.999 mil) di atas ekuator Bumi dan tidak lagi mengikuti arah rotasi bumi.`
hacker(command, "satelit", "https://asset.kompas.com/crops/jjqenjpiePG-jrwkYny11L8CDmo=/0x0:1906x1271/750x500/data/photo/2021/06/03/60b8d58df2157.jpg", ingfo)
break
case 'hackbts':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bts!!\nHmm saya tidak tau mau berkata apa lagi...`
hacker(command, "bts", "https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial/BTS-20210612062314.jpg", ingfo)
break
case 'hackfreefire':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack freefire!! dan saya sudah mengubah info apk nya seperti di bawah ini\n\n• Tanggal rilis awal: ndak tau\n• Pengembang: ndak tau\n• Penerbit: anda\n• Mode: Permainan gajlss\n• Engine: ndak tau\n• Genre: echi, harem\n• Platform: ndak tau.`
hacker(command, "freefire", "https://asset.kompas.com/crops/FZOLNy5SigKjiRNh8q2cJ9Chjic=/151x0:1231x720/375x240/data/photo/2020/06/25/5ef405986c087.jpg", ingfo)
break
case 'hacklautan':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack lautan!! sekarang lautan telah berubah warna😱😤🤯.`
hacker(command, "lautan", "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/11/06/4089587690.jpg", ingfo)
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("text nya mana")		
prosess("[❗] SEDANG DIPROSES")
nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${q}`) 
nyz4 = await getBuffer(nyz5.result)
nayla.sendMessage(from, {image:nyz4, caption: "SUKSES"}, {quoted:nay}) 		
break	
 case 'artinama':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz6 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artinama?query=${q}`)
nyz7 = `[ *ARTI NAMA* ]\n`,
nyz7 += `=> *ARTINAMA* : ${nyz6.result.list}`
reply(nyz7)	
break
case 'artimimpi':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz8 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artimimpi?query=${q}`)
nyz31 = `[ *ARTI MIMPI* ]\n`,
nyz31 += `=> *ARTINAMA* : ${nyz8.result.list}`
reply(nyz31)	
break
case 'resepmasakan':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz9 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/resepmasakan?query=${q}`)
nyz32 = `[ *RESEP MASAKAN* ]\n`,
nyz32 += `=> *NAMA* : ${nyz9.list.nama}\n`,
nyz32 += `=> *CARA* : ${nyz9.list.cara}`
reply(nyz32)	
break
case 'katajago':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz10 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/katajago?query=${q}`)
nyz33 = `[ *KATA JAGO* ]\n`,
nyz33 += `=> *RESULT* : ${nyz10.result.list}`
reply(nyz33)	
break 
case 'besarkecil':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz11 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/besarkecil?query=${q}`)
nyz34 = `[ *BESAR KECIL* ]\n`,
nyz34 += `=> *RESULT* : ${nyz11.result.list}`
reply(nyz34)	
break	  
case 'jumlahhuruf':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz12 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahhuruf?query=${q}`)
nyz35 = `[ *JUMLAH HURUF* ]\n`,
nyz35 += `=> *RESULT* : ${nyz12.result.list}`
reply(nyz35)	
break
case 'jumlahangka':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
if (!q) return reply("angka mana")
nyz13 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${q}`)
nyz36 = `[ *JUMLAH ANGKA* ]\n`,
nyz36 += `=> *RESULT* : ${nyz13.result.list}`
reply(nyz36)
break
case 'infogempa':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
nyz14 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/infogempa`)
nyz37 = `[ *INFO GEMPA* ]\n`,
nyz37 += `=> *WAKTU* : ${nyz14.result.waktu}\n`,
nyz37 += `=> *KEDALAMAN* : ${nyz14.result.kedalaman}\n`,
nyz37 += `=> *KOORDINAT* : ${nyz14.result.koordinat}\n`,
nyz37 += `=> *LOKASI* : ${nyz14.result.lokasi}\n`,
nyz37 += `=> *TSUNAMI* : ${nyz14.result.tsunami}`
reply(nyz37)
break	    	
case 'kapital':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz15 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/kapital?query=${q}`)
nyz38 = `[ *KAPITAL* ]\n`,
nyz38 += `=> *RESULT* : ${nyz15.result.list}`
reply(nyz38)
break	
case 'halah':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz16 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/halah?query=${q}`)
nyz39 = `[ *HALAH* ]\n`,
nyz39 += `=> *RESULT* : ${nyz16.result.list}`
reply(nyz39)
break    	
case 'hilih':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz17 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/hilih?query=${q}`)
nyz40 = `[ *HILIH* ]\n`,
nyz40 += `=> *RESULT* : ${nyz17.result.list}`
reply(nyz40)
break    	
case 'huluh':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz18 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/huluh?query=${q}`)
nyz41 = `[ *HULUH* ]\n`,
nyz41 += `=> *RESULT* : ${nyz18.result.list}`
reply(nyz41)
break    	
case 'heleh':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz19 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/heleh?query=${q}`)
nyz42 = `[ *HELEH* ]\n`,
nyz42 += `=> *RESULT* : ${nyz19.result.list}`
reply(nyz42)
break    	
case 'holoh':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz20 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/holoh?query=${q}`)
nyz43 = `[ *HOLOH* ]\n`,
nyz43 += `=> *RESULT* : ${nyz20.result.list}`
reply(nyz43)
break  
case 'bilangangka':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
if (!q) return reply("angka mana")
nyz21 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/bilangangka?query=${q}`)
nyz44 = `[ *BILANG ANGKA* ]\n`,
nyz44 += `=> *RESULT* : ${nyz21.result.list}`
reply(nyz44)
break 
case 'balikhuruf':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz23 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikhuruf?query=${q}`)
nyz46 = `[ *BALIK HURUF* ]\n`,
nyz46 += `=> *RESULT* : ${nyz23.result.list}`
reply(nyz46)
break	
case 'wikipedia':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz24 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${q}`)
nyz47 = `[ *WIKIPEDIA* ]\n`,
nyz47 += `=> *RESULT* : ${nyz24.result.list}`
reply(nyz47)
break 
case 'balikangka':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("angka mana")
nyz25 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikangka?query=${q}`)
nyz48 = `[ *BALIK ANGKA* ]\n`,
nyz48 += `=> *RESULT* : ${nyz25.result.list}`
reply(nyz48)
break	
case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': 
case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki':
case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': 
case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 			   
prosess("[❗] SEDANG DIPROSES")	
const judul = command
hx.pinterest(judul)
.then(result => {
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]					
const buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'NEXT'}, type: 1}]
const buttonMessage = {image: {url: result[randomnay1]},caption: "NIH",footerText: 'Loading...',buttons: buttons,headerType: 4}
nayla.sendMessage(from, buttonMessage, {quoted:nay})})
break 
case 'pinterest':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSES")
hx.pinterest(q)
.then(result => {
angkaa = ['1','2','3','4','5','6','7','8','9']
const randomnay2 = angkaa[Math.floor(Math.random() * (angkaa.length))]					
const buttons01 = [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: 'NEXT'}, type: 1}]
const buttonMessage01 = {image: {url: result[randomnay2]},caption: "NIH",footerText: 'Loading...',buttons: buttons01,headerType: 4}
nayla.sendMessage(from, buttonMessage01, {quoted:nay})})
break 
case 'attp':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana kak")
nyz200 = await getBuffer(`https://myselfff.herokuapp.com/docs/random/attp?query=${q}`)
nayla.sendMessage(from, {sticker:nyz200}, {quoted:nay1})
break	
case 'grubwa':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")  	
if (!q) return reply("Textnya mana kak")
nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${q}`)
nyz50 = `[ *GRUB WA* ]\n`,
nyz50 += `=> *NAMA* : ${nyz49.result.judul}\n`,
nyz50 += `=> *LINK* : ${nyz49.result.link}\n`
reply(nyz50)
break
case 'arena':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${q}`)
nyz53 = nyz51.result
nyz52 = `[ *ARENA* ]\n`,
nyz52 += `=> *SPEK* : ${nyz53.spek}\n`,
nyz52 += `=> *TYPE* : ${nyz53.type}\n`,
nyz52 += `=> *SIZE* : ${nyz53.size}\n`,
nyz52 += `=> *RESOLUSI* : ${nyz53.resolusi}\n`,
nyz52 += `=> *OS* : ${nyz53.os}\n`,
nyz52 += `=> *CPU* : ${nyz53.cpu}\n`,
nyz52 += `=> *INTERNAL* : ${nyz53.internal}\n`,
nyz52 += `=> *CAMERA* : ${nyz53.camera}\n`,
nyz52 += `=> *BATTERAI* : ${nyz53.batterai}\n`
reply(nyz52)
break
case 'amazon':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${q}`)
nyz55 = nyz54.result
nyz56 = `[ *AMAZON* ]\n`,
nyz56 += `=> *ITEM* : ${nyz55.item}\n`,
nyz56 += `=> *REVIEW* : ${nyz55.review}\n`,
nyz56 += `=> *RATING* : ${nyz55.rating}\n`,
nyz56 += `=> *PRICE* : ${nyz55.price}\n`,
nyz56 += `=> *DISKON* : ${nyz55.diskon}\n`,
nyz56 += `=> *URL* : ${nyz55.url}\n`,
nyz56 += `=> *SPONSOR* : ${nyz55.sponsor}\n`,
nyz56 += `=> *BEST* : ${nyz55.best}\n`,
nyz56 += `=> *AMAZON* : ${nyz55.amazon}\n`
reply(nyz56)
break
case 'shopee':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${q}`)
nyz58 = nyz57.result
nyz59 = `[ *SHOPEE* ]\n`,
nyz59 += `=> *JUDUL* : ${nyz58.judul}\n`,
nyz59 += `=> *HARGA* : ${nyz58.harga}\n`,
nyz59 += `=> *MERK* : ${nyz58.merk}\n`,
nyz59 += `=> *STOCK* : ${nyz58.stock}\n`,
nyz59 += `=> *LIKE* : ${nyz58.like}\n`,
nyz59 += `=> *VIEWS* : ${nyz58.views}\n`,
nyz59 += `=> *TERJUAL* : ${nyz58.terjual}\n`
reply(nyz59)
break
case 'thelazy':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${q}`)
nyz71 = nyz70.result
nyz72 = `[ *THELAZY* ]\n`,
nyz72 += `=> *TITLE* : ${nyz71.title}\n`,
nyz72 += `=> *URL* : ${nyz71.url}\n`,
nyz72 += `=> *CATEGORY* : ${nyz71.category}\n`,
nyz72 += `=> *AUTHOR* : ${nyz71.author}\n`,
nyz72 += `=> *POST* : ${nyz71.post_date}\n`,
nyz72 += `=> *COMMENTS* : ${nyz71.comments}\n`
reply(nyz72)
break
case 'cersex':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${q}`)
nyz74 = nyz73.result
nyz75 = `[ *CERSEX* ]\n`,
nyz75 += `=> *TITLE* : ${nyz74.title}\n`,
nyz75 += `=> *URL* : ${nyz74.url}\n`,
nyz75 += `=> *CATEGORY* : ${nyz74.category}\n`,
nyz75 += `=> *POST* : ${nyz74.post}\n`
reply(nyz75)
break
case 'ytsearch':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${q}`)
nyz77 = nyz76.result
nyz78 = `[ *YTSEARCH* ]\n`,
nyz78 += `=> *TITLE* : ${nyz77.title}\n`,
nyz78 += `=> *ID* : ${nyz77.id}\n`,
nyz78 += `=> *TYPE* : ${nyz77.type}\n`,
nyz78 += `=> *VIEWS* : ${nyz77.views}\n`,
nyz78 += `=> *URL* : ${nyz77.url}\n`,
nyz78 += `=> *DESC* : ${nyz77.desc}\n`
reply(nyz78)
break
case 'rexdl':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${q}`)
nyz80 = nyz79.result
nyz81 = `[ *REXDL* ]\n`,
nyz81 += `=> *TITLE* : ${nyz80.title}\n`,
nyz81 += `=> *URL* : ${nyz80.url}\n`, 
nyz81 += `=> *ON* : ${nyz80.on}\n`,
nyz81 += `=> *DESC* : ${nyz80.desc}\n` 
reply(nyz81)
break 
case 'sfile':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana kak")
nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${q}`)
nyz86 = nyz85.result
nyz87 = `[ *SFILE* ]\n`,
nyz87 += `=> *TITLE* : ${nyz86.title}\n`,
nyz87 += `=> *SIZE* : ${nyz86.size}\n`,
nyz87 += `=> *URL* : ${nyz86.url}\n`
reply(nyz87)
break
case 'berita':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
nyz89 = nyz88.result
nyz90 = `[ *BERITA* ]\n`,
nyz90 += `=> *TITLE* : ${nyz89.title}\n`,
nyz90 += `=> *URL* : ${nyz89.url}\n`
reply(nyz90)
break
case 'kompas':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
nyz92 = nyz91.result
nyz93 = `[ *KOMPAS* ]\n`,
nyz93 += `=> *TITLE* : ${nyz92.title}\n`,
nyz93 += `=> *URL* : ${nyz92.url}\n`
reply(nyz93)
break
case 'okezone':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
nyz95 = nyz94.result
nyz96 = `[ *OKEZONE* ]\n`,
nyz96 += `=> *TITLE* : ${nyz95.title}\n`,
nyz96 += `=> *URL* : ${nyz95.url}\n`
reply(nyz96)
break
case 'antara':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
nyz98 = nyz97.result
nyz99 = `[ *ANTARA* ]\n`,
nyz99 += `=> *TITLE* : ${nyz98.title}\n`,
nyz99 += `=> *URL* : ${nyz98.url}\n`
reply(nyz99)
break
case 'jam':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
nyz101 = nyz100.result
nyz102 = `[ *JAM* ]\n`,
nyz102 += `=> *WIB* : ${nyz101.wib}\n`,
nyz102 += `=> *WITA* : ${nyz101.wita}\n`,
nyz102 += `=> *WIT* : ${nyz101.wit}\n`
reply(nyz102)
break
case 'jamdunia':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
nyz104 = nyz103.result
nyz105 = `[ *JAM DUNIA* ]\n`,
nyz105 += `=> *WITA* : ${nyz104.wita}\n`,
nyz105 += `=> *WIT* : ${nyz104.wit}\n`,
nyz105 += `=> *WIB* : ${nyz104.wib}\n`,
nyz105 += `=> *MATAHARI* : ${nyz104.matahari}\n`,
nyz105 += `=> *TANGGAL* : ${nyz104.tanggal}\n`,
nyz105 += `=> *DETAIL* : ${nyz104.detail}\n`
reply(nyz105)
break
case 'jadwalbola':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
nyz107 = nyz106.result
nyz108 = `[ *JADWAL BOLA* ]\n`,
nyz108 += `=> *WAKTU* : ${nyz107.waktu}\n`,
nyz108 += `=> *KICKOFF* : ${nyz107.kickoff}\n`,
nyz108 += `=> *CHANNEL* : ${nyz107.channel}\n`
reply(nyz108)
break
case 'infohoax':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
nyz110 = nyz109.result
nyz111 = `[ *INFO HOAX* ]\n`,
nyz111 += `=> *TITLE* : ${nyz110.title}\n`,
nyz111 += `=> *URL* : ${nyz110.URL}\n`,
nyz111 += `=> *TANGGAL* : ${nyz110.tanggal}\n`,
nyz111 += `=> *DESC* : ${nyz110.desc}\n`
reply(nyz111)
break 
case 'coronameninggal':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
nyz113 = `=> *MENINGGAL* : ${nyz112.result.meninggal}`
reply(nyz113)
break	
case 'hadist':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz117 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/hadist`)
nyz118 = `[ *HADIST* ]\n`,
nyz118 += `=> *NAME* : ${nyz117.list.name}\n`,
nyz118 += `=> *ID* : ${nyz117.list.id}\n`,
nyz118 += `=> *AVAILABLE* : ${nyz117.list.available}\n`,
nyz118 += `=> *NUMBER* : ${nyz117.list.number}\n`,
nyz118 += `=> *ARAB* : ${nyz117.list.arab}\n`
reply(nyz118)
break
case 'quran':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz119 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/quran`)
nyz120 = `[ *QURAN* ]\n`,
nyz120 += `=> *QURAN* : ${nyz119.list.quran}\n`,
nyz120 += `=> *SURAH* : ${nyz119.list.surah}\n`,
nyz120 += `=> *JUZ* : ${nyz119.list.juz}\n`,
nyz120 += `=> *ARAB* : ${nyz119.list.arab}\n`,
nyz120 += `=> *SHORT* : ${nyz119.list.id_short}\n`,
nyz120 += `=> *LONG* : ${nyz119.list.id_long}\n`
reply(nyz120)
break
case 'asmaulhusna':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz121 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/asmaulhusna`)
nyz122 = `[ *ASMAULHUSNA* ]\n`,
nyz122 += `=> *NUMBER* : ${nyz121.list.number}\n`,
nyz122 += `=> *LATIN* : ${nyz121.list.latin}\n`,
nyz122 += `=> *ARAB* : ${nyz121.list.arab}\n`,
nyz122 += `=> *ID* : ${nyz121.list.id}\n`,
nyz122 += `=> *EN* : ${nyz121.list.en}\n`
reply(nyz122)
break
case 'kisahnabi':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/kisahnabi`)
nyz124 = `[ *KISAHNABI* ]\n`,
nyz124 += `=> *NAME* : ${nyz125.list.name}\n`,
nyz124 += `=> *KELAHIRAN* : ${nyz125.list.kelahiran}\n`,
nyz124 += `=> *WAFAT USIA* : ${nyz125.list.wafat_usia}\n`,
nyz124 += `=> *SINGGAH* : ${nyz125.list.singgah}\n`,
nyz124 += `=> *KISAH* : ${nyz125.list.kisah}\n`
reply(nyz124)
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	 			
try{
//reply("FITUR INI DINONAKTIFKAN SAAT BULAN RAMADHAN")	    
nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
nyz126 = await getBuffer(nyz125.result)
nayla.sendMessage(from, {image:nyz126},{quoted:nay})
} catch (e) {error("ERROR")}	
break  
case 'scbot':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply("https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw")
break
case 's':
case 'sticker':
case 'stiker':
case 'sgif':
case 'stickergif':
case 'stikergif':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
prosess("[❗] SEDANG DIPROSES")	    
if (isMedia || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.jpg', buffer)
const image = './media/res_buffer.jpg'
await ffmpeg(image)
.input(image)
.on('start', function (start) {
// console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
//console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker.webp'}, mimetype: 'image/webp' })
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./media/mysticker.webp')
} else if (isMedia || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.videoMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.mp4', buffer)
const video = './media/res_buffer.mp4'
await ffmpeg(video)
.input(video)
.on('start', function (start) {
// console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
//console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker2.webp' }, mimetype: 'image/webp' })
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save('./media/mysticker2.webp')
} else {
reply(`Kirim foto/video dengan caption ${prefix}sticker`)
}
} catch (e) {
console.log(e)
error("ERROR")
}
break
case 'emojiapple':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "0")
break
case 'emojigoogle':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "1")
break
case 'emojisamsung':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "2")
break
case 'emojimicrosoft':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "3")
break
case 'emojiwhatsapp':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "4")
break
case 'emojitwitter':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "5")
break
case 'emojifecabook':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "6")
break
case 'emojiskype':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "7")
break
case 'emojijoy':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "8")
break
case 'emojimoji':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "9")
case 'emojipedia':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "10")
break
case 'emojilg':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "11")
break
case 'trenbekasi': case 'trendepok': case 'trenpekanbaru': case 'trensurabaya': case 'trenmakassar': case 'trenbandung':
 case 'trenjakarta': case 'trenmedan': case 'trenpalembang': case 'trensemarang': case 'trentangerang':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
ny1 = await fetchJson(`https://myselfff.herokuapp.com/docs/trending/${command1}`)
ny2 = `• *NAMA* : ${ny1.result.title}\n`
ny2 += `• *URL* : ${ny1.result.desc}\n`
ny2 += `• *VOLUME* : ${ny1.result.volume}\n`
ny2 += `• *CONTENT* : ${ny1.result.content}\n`
ny2 += `• *QUERY* : ${ny1.result.query}\n`
reply(ny2)
break 
case 'hidetag':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply("TEXT NYA MANA")
const id = uwong.map(v => v.id)
nayla.sendMessage(from, { text: `${q}`, mentions: id })
break
case 'antilink':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons12 = [
{buttonId: `${prefix}antilink off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antilink on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp = {
text: `ANTILINK ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons12,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp, {quoted:nay1})
if ((args[0]) === 'on') {
antilink.push(from)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
reply("SUKSES : ANTILINK ON")
} else if ((args[0]) === 'off') {
antilink.splice(from, 1)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
reply("SUKSES : ANTILINK OFF")
} else {
nayla.sendMessage(from, pp, {quoted:nay1})
}
break 	
case 'antitag':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons132 = [
{buttonId: `${prefix}antitag off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antitag on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp1 = {
text: `ANTITAG ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons132,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp1, {quoted:nay1})
if ((args[0]) === 'on') {
antitag.push(from)
fs.writeFileSync('./lib/antitag.json', JSON.stringify(antitag))
reply("SUKSES : ANTITAG ON")
} else if ((args[0]) === 'off') {
antitag.splice(from, 1)
fs.writeFileSync('./lib/antitag.json', JSON.stringify(antitag))
reply("SUKSES : ANTITAG OFF")
} else {
nayla.sendMessage(from, pp1, {quoted:nay1})
}
break 	
case 'antivirtex':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons123 = [
{buttonId: `${prefix}antivirtex off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antivirtex on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp12 = {
text: `ANTIVIRTEX ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons123,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp12, {quoted:nay1})
if ((args[0]) === 'on') {
antivirtex.push(from)
fs.writeFileSync('./lib/antivirtex.json', JSON.stringify(antivirtex))
reply("SUKSES : ANTIVIRTEX ON")
} else if ((args[0]) === 'off') {
antivirtex.splice(from, 1)
fs.writeFileSync('./lib/antivirtex.json', JSON.stringify(antivirtex))
reply("SUKSES : ANTIVIRTEX OFF")
} else {
nayla.sendMessage(from, pp12, {quoted:nay1})
}
break 
case 'quotesanime':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSESS")			
var Quotes = require('anime-quotes-api');
var quote = new Quotes();
var get_quotes = await quote.quotes();
nyz1 = "QUOTES ANIME\n"
nyz1 += `=> *STATUS* : ${get_quotes[0].success}\n`
nyz1 += `=> *NAMA* : ${get_quotes[0].title}\n`
nyz1 += `=> *QUOTES* : ${get_quotes[0].quote}\n`
nyz1 += `=> *TAG* : ${get_quotes[0].tags}`
nextt(command, "NEXT", "https://i.ibb.co/3BYC0dh/20220427-115709.jpg", nyz1)
break
case 'quotesbucin': case 'quoteskehidupan': case 'quotesgalau': case 'quotesrandom':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSESS")			
const quoteAPI = require('quote-indo');
(async () => {
const query = body.slice(7).trim().split(/ +/).shift().toLowerCase()
const quote = await quoteAPI.Quotes(query);
nextt(command, "NEXT", "https://i.ibb.co/3BYC0dh/20220427-115709.jpg", quote)
})()
break
case 'berapa': case 'siapa': case 'kapan': case 'dimana': case 'apakah':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("MASUKKAN TEXT")
berapa1 = ["1","2","3","4","6","6","7","8","9"][Math.floor(Math.random() * (["1","2","3","4","6","6","7","8","9"].length))]
berapa2 = ["1","2","3","4","6","6","7","8","9"][Math.floor(Math.random() * (["1","2","3","4","6","6","7","8","9"].length))]
siapa1 = ["asep","Udin","Jamal","Wahyu","Putri","Jokowi","Mamak mu","Bapak mu","Ga ada","Nenek mu","Pacarmu","Megawaty","Tetangga mu"][Math.floor(Math.random() * (["asep","Udin","Jamal","Wahyu","Putri","Jokowi","Mamak mu","Bapak mu","Ga ada","Nenek mu","Pacarmu","Megawaty","Tetangga mu"].length))]
kapan1 = ["Kemaren","Besok","Lusa","Ga bakal","1 tahun lagi","2 tahun lagi","3 tahun lagi","1 bulan lagi","2 bulan lagi","3 bulan lagi","minggu depan"][Math.floor(Math.random() * (["Kemaren","Besok","Lusa","Ga bakal","1 tahun lagi","2 tahun lagi","3 tahun lagi","1 bulan lagi","2 bulan lagi","3 bulan lagi","minggu depan"].length))]
dimana1 = ["Di hatimu","jakarta","Makassar","lampung","kampung sebelah","Rumah mantan mu","Negara sebelah","Neraka","Surga","bogor","Kalimantan","papua","konoha","kuburan"][Math.floor(Math.random() * (["Di hatimu","jakarta","Makassar","lampung","kampung sebelah","Rumah mantan mu","Negara sebelah","Neraka","Surga","bogor","Kalimantan","papua","konoha","kuburan"].length))]
apakah1 = ["Iya","Ngak","Ndak tau","Mungkin"][Math.floor(Math.random() * (["Iya","Ngak","Ndak tau","Mungkin"].length))]
if (command == "berapa") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${berapa1 + berapa2}\n` + `> *BERAPA* : ${q}`} } }})}
if (command == "siapa") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${siapa1}\n` + `> *SIAPA* : ${q}`} } }})}
if (command == "kapan") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${kapan1}\n` + `> *KAPAN* : ${q}`} } }})}
if (command == "dimana") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${dimana1}\n` + `> *DIMANA* : ${q}`} } }})}
if (command == "apakah") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${apakah1}\n` + `> *APAKAH* : ${q}`} } }})}
break
case 'ytmp3': case 'ytaudio':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("MASUKKAN URL")
let { aiovideodl } = require('./lib/scraper')
let result = await aiovideodl(isUrl(text)[0])
let { url, title, thumbnail, duration, medias } = result
let quality = args[1] ? args[1] : '128kbps'                
let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
prosess("[❗] SEDANG DIPROSESS")		 
nayla.sendMessage(from, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: nay })
break
case 'ytmp4': case 'ytvideo':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("MASUKKAN URL")
prosess("[❗] SEDANG DIPROSESS")		
let { aiovideodll } = require('./lib/scraper')
let resultt = await aiovideodll(isUrl(text)[0])
let { urll, titlee, mediass } = resultt
let qualityy = args[1] ? args[1] : '360p'                
let mediaa = mediass.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.qualityy == qualityy).map(v => v)
if (mediaa[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('File Melebihi Batas'+util.format(mediaa))
nayla.sendMessage(from, { video: { urll: mediaa[0].url }, fileName: `${titlee}.mp4`, mimetype: 'video/mp4', caption: `NIH` }, { quoted: nay })
break
case 'ronaldo': case 'messi': case 'rashford': case 'mbappe': case 'ricardo': case 'oliver': case 'erling': case 'robert': case 'vinicius': case 'rodri':
if (isLimit(sender)) return reply("YAHHH LIMIT KAMU UDAH HABIS")
await limitAdd(sender) 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSES")
ronaldo1 = `Cristiano Ronaldo dos Santos Aveiro GOIH ComM adalah seorang pemain sepak bola profesional asal Portugal yang bermain sebagai penyerang untuk klub Liga Inggris, Manchester United dan juga kapten untuk tim nasional Portugal. Wikipedia\nKelahiran: 5 Februari 1985 (usia 37 tahun), Hospital Dr. Nélio Mendonça, Funchal, Portugal\nTinggi: 1,87 m\nKebangsaan: Portugis\nGaji: 26,52 juta GBP (2022)\nPartner: Georgina Rodríguez (2017–)\nAnak: Cristiano Ronaldo Jr., Mateo Ronaldo, Alana Martina dos Santos Aveiro, lainnya\nNomor punggung: 7 (Juventus F.C. / Penyerang)`
messi1 = `Lionel Andrés Messi juga dikenal sebagai Leo Messi, adalah seorang pemain sepak bola profesional asal Argentina yang bermain sebagai penyerang untuk klub Ligue 1 Paris Saint-Germain dan merupakan kapten tim nasional Argentina. Wikipedia\nKelahiran: 24 Juni 1987 (usia 34 tahun), Rosario, Argentina\nTinggi: 1,69 m\nGaji: 41 juta USD (2022)\nPasangan: Antonella Roccuzzo (m. 2017)\nTim saat ini: Paris Saint-Germain F.C. (#30 / Penyerang), lainnya\nAnak: Mateo Messi Roccuzzo, Thiago Messi, Ciro Messi Roccuzzo`
rashford1 = `Marcus RasforMBE adalah seorang pemain sepak bola profesional untuk Manchester United dan tim nasional Inggris. asdadt mencetak dua gol pada pertandingan debutnya bersama tim senior menghadapi Midtjylland di UEFA Europa League. Dia juga mencetak gol melawan Arsenal saat debut di Premier League. Wikipedia\nKelahiran: 31 Oktober 1997 (usia 24 tahun), Manchester, Britania Raya\nTinggi: 1,8 m\nBerat: 70 kg\nGaji: 10,4 juta GBP (2022)\nTim saat ini: Manchester United F.C. (#10 / Penyerang), lainnya\nOrang tua: Robert Rashford, Melanie Rashford\nSaudara kandung: Dwaine Maynard, Chantelle Rashford, Dane Rashford, Tamara Rashford`
mbappe1 = `Kylian Mbappé Lottin adalah seorang pemain sepak bola profesional Prancis yang bermain sebagai penyerang untuk Paris Saint-Germain dan tim nasional Prancis. Wikipedia\nKelahiran: 20 Desember 1998 (usia 23 tahun), Arondisemen XIXe, Paris, Perancis\nTinggi: 1,78 m\nKebangsaan: Prancis\nBerat: 73 kg\nGaji: 22 juta EUR (2022)\nTim saat ini: Paris Saint-Germain F.C. (#7 / Penyerang), lainnya\nOrang tua: Fayza Lamari, Wilfried Mbappé`
ricardo1 = `Ricardo Izecson dos Santos Leite, lebih dikenal dengan nama Kaká atau Ricardo Kakà, adalah seorang pemain sepak bola asal Brasil yang kini membela klub Orlando City SC. Kaká memulai karier sepak bolanya pada usia delapan tahun. Wikipedia\nKelahiran: 22 April 1982 (usia 40 tahun), Gama, Distrik Federal, Brasil\nAkhir karier: 2017\nTinggi: 1,86 m\nNomor punggung: 22 (A.C. Milan / Penyerang), 8 (Real Madrid C.F. / Gelandang), lainnya\nPasangan: Carolina Dias (m. 2019), Caroline Celico (m. 2005–2015)\nAnak: Luca Celico Leite, Isabella Celico Leite, Esther Dias Leite`
oliver1 = `Oliver Bierhoff merupakan mantan pemain sepak bola berkebangsaan Jerman. Dia pernah membela klub utamanya seperti Bayer Uerdingen, Hamburger SV, Borussia Mönchengladbach, Austria Salzburg, Ascoli Calcio, Udinese Calcio, AC Milan, AS Monaco, dan Chievo Verona. Di timnas Jerman, dia bermain 70 kali dan mencetak 37 gol. Wikipedia\nKelahiran: 1 Mei 1968 (usia 53 tahun), Karlsruhe, Jerman\nTinggi: 1,91 m\nPasangan: Klara Szalantzy (m. 2001)\nNomor punggung: 20 (AS Monaco FC / Penyerang)\nTanggal bergabung: 2002 (A.C. ChievoVerona), 2001 (AS Monaco FC), 1998 (A.C. Milan), lainnya\nOrang tua: Rolf Bierhoff, Silvie Bierhoff\nSaudara kandung: Nicole Bierhoff`
erling1 = `Erling Braut Haaland adalah pemain sepak bola profesional Norwegia yang bermain sebagai striker untuk klub Jerman Borussia Dortmund dan tim nasional Norwegia. Haaland memulai kariernya di klub kota asalnya Bryne FK pada 2016, dan pindah ke Molde FK tahun berikutnya selama dua tahun. Wikipedia\nKelahiran: 21 Juli 2000 (usia 21 tahun), Leeds, Britania Raya\nKebangsaan: Norwegia\nTinggi: 1,94 m\nBerat: 88 kg\nTim saat ini: Borussia Dortmund (#9 / Penyerang), lainnya\nTanggal bergabung: 2020 (Borussia Dortmund), 2019 (FC Red Bull Salzburg), 2017 (Molde FK), lainnya\nOrang tua: Alf-Inge Haaland, Gry Marita Braut`
robert1 = `Robert Lewandowski adalah pemain sepak bola Polandia yang pernah bermain sebagai penyerang pada klub Bundesliga Jerman, Borrusia Dortmund dan merupakan kapten tim nasional Polandia. Dan sekarang bermain sebagai penyerang pada klub FC Bayern München. Wikipedia\nKelahiran: 21 Agustus 1988 (usia 33 tahun), Warsawa, Polandia\nKebangsaan: Polandia\nTinggi: 1,85 m\nGaji: 23 juta EUR (2022)\nPasangan: Anna Stachurska (m. 2013)\nTim saat ini: Tim nasional sepak bola Polandia (#9 / Penyerang), lainnya\nAnak: Klara Lewandowska, Laura Lewandowska`
vinicius1 = `Vinícius José Paixão de Oliveira Júnior, biasa dikenal sebagai Vinícius Júnior atau Vini Jr., adalah seorang pemain sepak bola profesional asal Brasil yang bermain sebagai pemain sayap untuk klub Spanyol Real Madrid dan tim nasional Brasil. Wikipedia\nKelahiran: 12 Juli 2000 (usia 21 tahun), São Gonçalo, Rio de Janeiro, Brasil\nTinggi: 1,76 m\nKebangsaan: Brasil\nOrang tua: Vinícius José Paixão de Oliveira\nTim saat ini: Tim nasional sepak bola Brasil (#18 / Penyerang),`
rodri1 = `Rodrigo Hernández Cascante, lebih dikenal sebagai Rodri atau Rodrigo, adalah seorang pemain sepak bola profesional asal Spanyol yang bermain sebagai gelandang bertahan untuk klub Liga Utama Inggris, Manchester City dan tim nasional Spanyol. Wikipedia\nKelahiran: 22 Juni 1996 (usia 25 tahun), Madrid, Spanyol\nTinggi: 1,91 m\nNama lengkap: Rodrigo Hernández Cascante\nTahun: Tim\nTim saat ini: Manchester City F.C. (#16 / Gelandang), lainnya\nTanggal bergabung: 2019 (Manchester City F.C.), 2018 (Club Atlético de Madrid), lainnya\nRodrigo Hernández Cascante (lahir 22 Juni 1996)`
rodri2 = "https://i.pinimg.com/736x/cc/29/12/cc2912b72df482d38930f8f292baac6f.jpg"
vinicius2 = "https://i.pinimg.com/736x/ed/f3/7f/edf37fb76de79b506e33a9fa39d71e06.jpg"
robert2 = "https://i.pinimg.com/736x/d9/6e/98/d96e9874db1f939db82eeb8042f13260.jpg"
erling2 = "https://i.pinimg.com/736x/4d/d5/24/4dd524724bfa32fe659529e8d6a43276.jpg"
oliver2 = "https://i.pinimg.com/736x/65/d1/ef/65d1ef2d81577bec971ce05136fb6725.jpg"
ricardo2 = "https://i.pinimg.com/736x/7a/f2/a1/7af2a1fdbbbabac474d7e698eade87b8.jpg"
mbappe2 = "https://i.pinimg.com/736x/4e/2f/46/4e2f46636f6f975baaa74ea2ae13274e.jpg"
rashford2 = "https://i.pinimg.com/736x/8d/b7/c2/8db7c2e136416d8d4ee906410ee036c5.jpg"
ronaldo2 = "https://i.pinimg.com/736x/6d/a3/fa/6da3fac08a99a4d9c7137d83a17c581b.jpg"
messi2 = "https://i.pinimg.com/736x/7c/94/cc/7c94ccde6ccb51fab9200da12b4ea180.jpg"
if (command == "ronaldo") return nayla.sendMessage(from, {image:{url: ronaldo2 }, caption:ronaldo1})  
if (command == "rodri") return nayla.sendMessage(from, {image:{url: rodri2 }, caption:rodri1})  
if (command == "vinicius") return nayla.sendMessage(from, {image:{url: vinicius2 }, caption:vinicius1})  
if (command == "robert") return nayla.sendMessage(from, {image:{url: robert2 }, caption:robert1})  
if (command == "erling") return nayla.sendMessage(from, {image:{url: erling2 }, caption:erling1})  
if (command == "oliver") return nayla.sendMessage(from, {image:{url: oliver2 }, caption:oliver1})  
if (command == "ricardo") return nayla.sendMessage(from, {image:{url: ricardo2 }, caption:ricardo1})  
if (command == "mbappe") return nayla.sendMessage(from, {image:{url: mbappe2 }, caption:mbappe1})  
if (command == "rashford") return nayla.sendMessage(from, {image:{url: rashford2 }, caption:rashford1})  
if (command == "messi") return nayla.sendMessage(from, {image:{url: messi2 }, caption:messi1}) 
break
default: 
if (budy.includes("@")){
if (!isAntitag) return
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `STOP TAG TAG [ 🤬 ]`} } }}) 	
}            
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net` 
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [Kick],"remove")
}, 1000)
setTimeout( () => {
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `ANTILINK [ ON ]`} } }}) 	
}, 0)
}
if (txt.length > 1500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [kic],"remove")
}, 0)
}
}
} catch (e) {
console.log(`${e}`) 
}
}