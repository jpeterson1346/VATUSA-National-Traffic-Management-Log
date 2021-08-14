import discord

intents = discord.Intents.default()

channel_12345678 = 661596005191647233

Client = discord.Client(intents = intents)

token = open("token.txt", "r").read()
client = discord.Client()

@client.event
async def on_ready():
print(‘Logged in as {0.user}’.format(client))