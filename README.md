# Shino
 Javascript Discord bot.


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
 
 Install rest API:
 ```
 npm install discord.js @discordjs/rest
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