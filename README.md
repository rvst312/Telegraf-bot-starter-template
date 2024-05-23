# Telegraf node.js Bot
Easy starter template telegram bot  
## Getting Started:
- Search in Telegram "BotFather".
- Start bot whith: "/newbot".
- Follow the steps until you get the API key of our bot.
- Clone this repository:
```
git clone "https://github.com/rvst312/Telegraf-bot-starter-template"
```
- Navigate to the bot directory open it in a code editor and add the API key. 
```
cd Telegraf-starter-template
```
- Install dependencies:
```
npm install
``` 
- Run this bot:
```
node index.js
```
## Easy deploy bot in Heroku
- Install Heroku "CLI" https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli
- Heroku login
```
heroku login
```
- Create "Procfile" file in the root
```
// worker : node "name main file"
worker: node index.js
```
- Add repository
```
git init
git add .
```
- Create Herou App
```
heroku create
commit -m "first commit"
git push heroku main 
```
- Now your bot is online ✔
