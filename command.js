import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL',
  },
];

const rest = new REST({ version: '10' }).setToken("MTE4ODQ5NzgzNTk4MTc5OTUyNA.GeK7X1.C6OmHjoUPP_j8NlWk9LdJ0uxMH_P6phYWUJP1U");

(async()=> {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1188497835981799524'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();