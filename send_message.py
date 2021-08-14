import discord

intents = discord.Intents.default()

channel_12345678 = 661596005191647233

client = discord.Client(intents = intents)

token = open("token.txt", "r").readline()

@client.event
async def on_message(message):
    if message.content.startswith('test'):
        await message.channel.send('passed')

client.run(token)