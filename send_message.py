import discord
import datetime
import re

intents = discord.Intents.default()

channel_12345678 = 661596005191647233
START_KEY = "$ntml"

client = discord.Client(intents = intents)

token = open("token.txt", "r").readline()

@client.event
async def on_message(message):
    if message.content.startswith(START_KEY):
        ntml_entry = message.content
        ntml_entry = re.match("\$ntml (.*)",ntml_entry).group(1)
        # print("Message: " + ntml_entry)
        
        ntml_entry_time = datetime.datetime.utcnow()
        ntml_entry_time = ntml_entry_time.strftime("%d/%H%M")
        # print(ntml_entry_time)
        
        await message.channel.send("```" + ntml_entry_time + "\t" + ntml_entry + "```")
        
        exit('Finished')

client.run(token)