# Autobumpr
A Selfbot based on discord.js-selfbot-v13 which automatically bumps the discord server


## Instructions to Host on Mobile 

* Install Termux from [fdroid](https://f-droid.org/en/packages/com.termux/)
* Open Termux and run the following commands
 ```bash
pkg update && pkg upgrade -y
```
```bash
pkg i git nodejs -y
```
```bash
cd /
```
```bash
cd storage/emulated/0
```
```bash
git clone https://github.com/KrishnaSSH/Autobumpr
```
```bash
cd Autobumpr
```
```bash
cp .env.example .env
```
```bash
nano .env
```
* Add the Discord Userbot Token and the Channel ID in the .env file
* There will be a Ctrl key on top of Your Keyboard Press that then press O on your keyboard and then hit enter
* Then Press Ctrl again and Press X on your Keyboard and hit enter
* Now follow these Commands

```bash
npm install
```
```bash
node index
```

### Note: Android system may kill the termux app after some and the bot will go offline to Prevent this Click the acquire wakelock button in the Notifications Panel
