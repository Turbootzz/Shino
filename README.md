# Shino
 An interactive Discord bot that can talk to you and has multiple useful functionalities. The goal with this bot is to get a sort of AI that represent an anime character. I don't know why I am making this, but it is just a fun practice for me.


## Installation
 Initialise project
 ```
 npm init -y
 ```

 Install DiscordJS
 ```
 npm install discord.js
 ```

 Install DOT Enviroment
 ```
 npm install dotenv
 ```

 Create a file called: ".env" in the root directory

 Make sure your discord is in Developer Mode
 
 Add the following in the .env file:
 ```
 BOT_TOKEN=YourBotToken
 CLIENT_ID=BotsClientID
 GUILD_ID=DevServerID
 ```

 Install REST API:
 ```
 npm install discord.js @discordjs/rest
 ```

 Install DiscordJS Builders.
 ```
 npm i @discordjs/builders
 ```

 Install Nodemon for dev refreshes.
 ```
 npm i --save-dev nodemon
 ```

## Start the bot
 For production:
 ```
 npm start
 ```
 
 For developer mode:
 ```
 npm run start:dev
 ```