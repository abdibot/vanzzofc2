<p align="center">
<img src="https://github.com/abdibot/vanzzofc1/blob/master/image/vanzz.jpg" alt="VANZZ BOTZ" width="100"/>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/abdibot/vanzzofc2/)


# Official Group
- [Group 1](https://chat.whatsapp.com/KdLwTm1ZIgK7Jqyui22kLc)
- [Group 2](https://chat.whatsapp.com/Lx0C83vuq5CCcR9FLoQre5)


# Instalasi
## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## For Termux
```ts
termux-setup-storage
apt update && apt upgrade
pkg install nodejs git ffmpeg libwebp imagemagick
git clone https://github.com/abdibot/vanzzofc1
cd vanzzofc1
pkg install yarn
yarn install
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys-md/
rm -rf session.json
rm -rf store.json
npm start
```


## Edit file
`./settings.js`
```ts
// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "VANZZ BOTZ" //namabot kalian
global.ownername= "VANZZ OFC" //nama kalian
global.myweb ="https://github.com/abdibot" //bebas asal jan hapus
global.youtube = "https://m.youtube.com/channel/UCEDb6SkiPU0theI8J_WEZZA" //bebas asal jan hapus
global.github = "https://github.com/abdibot" //bebas
global.email = "vanzzofc@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285824629954" // nomor wa kalian
global.ownernomerr = "+6285824629954" //nmr wa kalian
global.thumbnail = "./image/vanzz.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285824629954","6285824629954","6285824629954"] //ganti agar fitur owner bisa di gunakan
global.packname = '© VANZZ BOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh vanzzofc' //sticker wm ganti nama kalian
global.sessionName = 'session'
```


## DEPLOY TERMUX KE HEROKU
```ts
apt update
apt upgrade
pkg install nodejs 
pkg install yarn
yarn add heroku
npm install -g npm
heroku version
heroku login
cd /sdcard
cd nama file
git init
heroku git:remote -a repo heroku kalian
git add .
git commit -am "nama file"
git push heroku master
dan udah ke deploy sendiri
```
