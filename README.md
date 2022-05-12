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
