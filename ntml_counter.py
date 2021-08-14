import discord
import datetime
from discord.ext import commands
from discord.ext import tasks

token = open("token.txt", "r").read()

class MyClient(discord.Client):
    async def on_message(message):
        if message.content.startswith("ntml"):
            ntml_entry_time = datetime.datetime.now()
            ntml_entry_time = ntml_entry_time.strftime("%d/%H%M")
            
            await message.channel.send(ntml_entry_time)
            
        exit()

client = MyClient()
client.run(token)